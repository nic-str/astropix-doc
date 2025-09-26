# SPI Daisychain Interface

## Controlling FE

AstroPix accepts commands via MOSI in the following 8 bit format:

{% include-markdown "./spi/format_packet.md" %}

All valid commands are listed in the table below:

| BIT   | Field   | Description                                                                                   |
|-------|---------|-----------------------------------------------------------------------------------------------|
| [4:0] | Address | 0x00 -  0x14 : Single addresses<br>0x15 - 0x1F : Reserved<br>0x1D: Invalid<br>0x1E: Broadcast |
| [7:5] | Command | 0x01 - NOCMD / IDLE<br>0x02 - Routing: dispatch<br>0x03 - Shift Register Config addresses     |

The IDLE Byte represents no specific command and an invalid address: 0x1D for address and 0x1 for IDLE -> 0x3D
{% include-markdown "./spi/format_idle.md" %}

### Commands

| COMMAND | NAME  | LENGTH | DESCRIPTION   |
|---------|-------|--------|---------------|
| 0x01    | NOCMD | 1 Byte | Nothing to do |
|0x02|	Address Config|	1 Byte	|Header Address represents the new address of the Chip. Chip forwards command to the next chip with Address = Address + 1<br>To configure Addresses with first Chip “00”, send 0x40 to the first Chip, then send some IDLE bytes so that the Clock stays active and the addressing byte gets passed down the chain|
|0x03 |	Shift Register Config	|N Bytes	|Once this command is sent, the whole SPI Frame is used - SPI Chip Select must be de-asserted and reasserted to send a new command|


### Shift Register I/O and SPI Command

The Shift Register I/O exposes two clocks, a serial input (SIN), and a load signal to load the bits to the registers.
Each bit present on the SIN serial line is clocked through the shift register after Clock 1 and Clock have been toggled separately. The following diagram shows the simple sequence:

{% include-markdown "./spi/format_sr.md" %}

The SPI Command generates this sequence by using in each byte one bit as Serial In, and the other bits as clock time to generate the CLK1/CLK2 and Load sequence:

-	First Byte is 0x3 command and target Chip (or broadcast ID)
-	Each following byte shifts a 0 or 1 in the Shift Register. The LSB of the byte is used for Serial in (8’bxxxxxxx1 or 8’bxxxxxxx0)
-	At the end of the sequence, send a byte with bit[1] = 1 to generate the Load signal
-	When the frame finishes, the Load signal goes back to 0.


## Reading from FE
The APS to FE path differs from the FE -> APS since it is not meant to process any commands. Its job is simply to forward packets down the chain, and arbitrate between packets to be forwarded and packets coming from the local readout.

The Data format on this path is built using a Header that reflects the Chip ID of the data frame, and a length information so that the Arbiter can transmit frames fully without chunking.

In our project, it is a requirement that data frames be able to pass through the chip without pausing since the SPI interface has no way to synchronise between chips in case some buffer is running full because a lot of data are produced by a chip which blocks the data forwarding path. In such a case, a receiving chip would detect a buffer running full and would have to fill the current frame with error data when possible, then discard any incoming frames until the buffer frees up. This is not implemented right now

However, this type of events can be easily excluded using the following mechanisms:

-	The data forwarder should have a buffer of at least one max. frame size, so that is a frame comes in, and a local readout is producing a frame, the received frame will not overflow the buffer.
-	The chip Readout can introduce data production pauses to make sure that if multiple Pixel hits are available, it will leave enough clock cycles free from the readout to let frames from other Chips come through:
-	At least 1 free cycle between readouts, which is guaranteed by the Readout-Hit Buffer synchronisation (at least one Load state)
-	A configurable amount of extra waiting time, in case the chip is being tested in an environment producing more hits that the real application



### Hit Packet
Each hit should produce 2 dataframes with a row and a column packet. Each dataframe consists of the following 5 Bytes:
{% include-markdown "./spi/format_packet_hit.md" %}

#### Header Byte
{% include-markdown "./spi/format_packet_read.md" %}

- Chip address is the configured chip ID using the routing byte
- The payload length is the number of bytes trailing the header

#### Hit Location Byte

{% include-markdown "./spi/format_packet_hit_location.md" %}

- MSB is for Row/Column identification
- 6 bit LSB is the Row/Column Address

## Readout procedure

APS Readout Sequence Overview

-	Timestamp Clock and ToT clocks active
-	Communication using SPI
-	Send Routing Byte through DaisyChain
-	Send Shift Register Config Command to configure Pixel Matrixes
-	Wait for Interrupt with SPI deactivated (Digital Block Off)
-	When Interrupt is asserted, Send dummy bytes to start readout
-	Keep sending dummy bytes until the interrupt is deasserted and no packets are detected for c.a 40 Bytes
-	Deactivate SPI to ‘sleep’

