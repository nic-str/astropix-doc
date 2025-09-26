# SPI Daisychain Interface

## DAQ to FE

AstroPix accepts commands via MOSI in the following 8 bit format:

{% include-markdown "./spi/format_packet.md" %}
/// caption
SPI command format
///

All valid commands are listed in the table below:

| BIT   | Field   | Description                                                                                   |
|-------|---------|-----------------------------------------------------------------------------------------------|
| [4:0] | Address | 0x00 -  0x14 : Single addresses<br>0x15 - 0x1F : Reserved<br>0x1D: Invalid<br>0x1E: Broadcast |
| [7:5] | Command | 0x01 - NOCMD / IDLE<br>0x02 - Routing: dispatch<br>0x03 - Shift Register Config addresses     |

The IDLE Byte represents no specific command and an invalid address: 0x1D for address and 0x1 for IDLE -> 0x3D
{% include-markdown "./spi/format_idle.md" %}
/// caption
SPI IDLE command
///
### Commands

| COMMAND | NAME  | LENGTH | DESCRIPTION   |
|---------|-------|--------|---------------|
| 0x01    | NOCMD | 1 Byte | Nothing to do |
|0x02|	Address Config|	1 Byte	|Header Address represents the new address of the Chip. Chip forwards command to the next chip with Address = Address + 1<br>To configure Addresses with first Chip “00”, send 0x40 to the first Chip, then send some IDLE bytes so that the Clock stays active and the addressing byte gets passed down the chain|
|0x03 |	Shift Register Config	|N Bytes	|Once this command is send, the whole SPI Frame is used - SPI Chip Select must be deasserted and reasserted to send a new command|


### Shift Register I/O and SPI Command

The Shift Register I/O exposes two clocks, a serial input (SIN), and a load signal to load the bits to the registers.
Each bit present on the SIN serial line is clocked through the shift register after Clock 1 and Clock have been toggled separately. The following diagram shows the simple sequence:

{% include-markdown "./spi/format_sr.md" %}

The SPI Command generates this sequence by using in each byte one bit as Serial In, and the other bits as clock time to generate the CLK1/CLK2 and Load sequence:

-	First Byte is 0x3 command and target Chip (or broadcast ID)
-	Each following byte shifts a 0 or 1 in the Shift Register. The LSB of the byte is used for Serial in (8’bxxxxxxx1 or 8’bxxxxxxx0)
-	At the end of the sequence, send a byte with bit[1] = 1 to generate the Load signal
-	When the frame finishes, the Load signal goes back to 0.
