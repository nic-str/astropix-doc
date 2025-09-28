!!! warning

    - Unused inputs must be tied to ground unless otherwise specified.
    - Unused outputs should be left unconnected.
    - Unused bidirectional pins should be left unconnected.

## Recommended Operating Parameters
### Supply Voltages
| Parameter                            | Min    | Typ     | Max    | Typ. Current | Comment                                                                |
|--------------------------------------|--------|---------|--------|--------------|------------------------------------------------------------------------|
| vdda!                                | 1.62 V | 1.8 V   | 1.98 V | 2 mA         | All pads internally connected - add decoupling on each pad if possible |
| vdd!                                 | 1.62 V | 1.8 V   | 1.98 V | 5 mA         | All pads internally connected - add decoupling on each pad if possible |
| vssa!                                | 1.1 V  | 1.2 V   | 1.98 V | -         | Not implemented |
| vminuspix                            | 0 V    | 0.7 V   | 1.98 V | < 100 uA     | **Voltage regulator must be able to sink current**                                |
| HV                                   | 0 V    | -120 V  | -190 V | < 100 nA     | All pads internally connected - Negative Bias for Pixel Sensors        |

!!! warning

    The low voltage supplies vdda!, vdd! and vssa! should be turned on at the same time, otherwise the chip can be damaged due to high currents caused by forward biased diodes.

### LVDS Receiver
| Parameter              | Min   | Typ   | Max | Comment |
|------------------------|-------|-------|-----|---------|
| Common mode voltage    | 0.8 V | 1.2V  |     |         |
| Differential amplitude | 0.2 V | 0.4 V |     |         |
| Input capacitance      |       | ~3 pF |     |         |

## Pins

!!! note

    Pins starting with **B** are located at the **bottom**, **L** on the **left** and **R** on the **right** side of the chip

| Pin | Name     | Supply | TYPE  | Description   |
|-----|----------|--------|-------|---------------|
| B1  | sub      | HV     | Power |               |
| B2  | subdpads | HV     | Power | Don't connect |
| B3  | gnda!    |        | Power |               |
| B4  | vdda!    | 1.8 V  | Power |               |
| B5  | sample_clock_p     |        | Input           | LVDS <200 MHz Clock for ToT counter<br>  (Connect to gnd! if Single ended clock is used) - P/N can be swapped
| B6  | sample_clock_n     |        | Input           | LVDS <200 MHz Clock for ToT counter<br>  (Connect to vdd! if Single ended clock is used) - P/N can be swapped             |
| B7  | vdd!               | 1.8 V  | Power   |               |
| B8  | gnd!               |        | Power   |               |
| B9  | interrupt          |        | Output (Open-Drain/pushpull see [interrupt_pushpull](configuration.md#digital-config) config bit) | Active low status signal (0: data to read out 1: no data to read out) - Needs 10 kOhm pullup to vdd! in Open-Drain mode            |
| B10 | res_n              |        | Input               | Active low global reset |
| B11 | timestamp_clk      |        | Input           |               |
| B12 | hold               |        | Output           |               |
| B13 | sr_CK1             |        | Input               | SPI Fallback: Clock1 for Chip Configuration |
| B14 | sr_CK2             |        | Input               | SPI Fallback: Clock2 for Chip Configuration |
| B15 | sr_LOAD            |        | Input               | SPI Fallback: Load for Chip Configuration  |
| B16 | sr_SIN             |        | Input               | SPI Fallback: In for Chip Configuration           |
| B17 | sr_RB              |        | Input               | SPI Fallback: Readback for Chip Configuration             |
| B18 | sr_SOUT            |        | Output              | SPI Fallback: Out for Chip Configuration |
| B19 | vdd!               | 1.8 V  | Power   |               |
| B20 | gnd!               |        | Power   |               |
| B21 | vdda!              | 1.8 V  | Power   |               |
| B22 | gnda!              |        | Power   |               |
| B23 | gnda!              |        | Power   |               |
| B24 | VPBias             |        | BiDir               | Reference current |
| B25 | pamp               |        | BiDir            |  Don't connect             |
| B26 | blpix              |        | BiDir               | Comparator baseline voltage |
| B27 | NC                 |        | NC       |               |
| B28 | gnda!              |        | Power   |               |
| B29 | vdda!              | 1.8 V  | Power   |               |
| B30 | Inj                |        | BiDir               | Analog Injection  |
| B31 | VCasc2!            |        | BiDir               | Load cascode voltage    |
| B32 | ThPix              |        | BiDir               | Comparator threshold voltage for NMOS Amplifier pixels                                                 |
| B33 | vminuspix          | 0.9 V  | Power               | Level shifter low level |
| B34 | gnda!              |        | Power   |               |
| B35 | vdda!              | 1.8 V  | Power   |               |
| B36 | SFOut              |        | Output              | Source Follower to buffer signal from analog multiplexer, needs external load resistor 2 kOhm to gnda! |
| B37 | vdda_temp          | 1.8 V  | Power   |               |
| B38 | gnda_temp          |        | Power   |               |
| B39 | Vtemp1             |        | Output           |               |
| B40 | sub                | HV     | Power   |               |
| B41 | subapads           | HV     | Power   |   Don't connect            |
| B42 | ring1              |        | Power   |               |
| B43 | ring2              |        | Power   |               |
| B44 | ring3              |        | Power   |               |
| B45 | ring4              |        | Power   |               |
| L1  | SPI_left_MISO1     |        | Output              | SPI Peripheral MISO1                                                                                   |
| L2  | SPI_left_MISO0     |        | Output              | SPI Peripheral MISO0                                                                                   |
| L3  | SPI_left_MOSI      |        | Input               | SPI Peripheral MOSI                                                                                    |
| L4  | SPI_left_CLK       |        | Input               | SPI Clock input                                                                                        |
| L5  | SPI_left_CSN       |        | Input               | SPI Chip Select (active-low) input                                                                     |
| L6  | sample_clock_left  |        |  Output              | Single Ended ToT clock input |
| R1  | sample_clock_right |        | Output           |  Don't use - internal connection to Pad missing             |
| R2  | SPI_right_CSN      |        | Output              | SPI Chip Select (active-low) output                                                                    |
| R3  | SPI_right_CLK      |        | Output              | SPI Clock output                                                                                       |
| R4  | SPI_right_MOSI     |        | Output              | SPI Sender MOSI                                                                                        |
| R5  | SPI_right_MISO0    |        | Input               | SPI Sender MISO0                                                                                       |
| R6  | SPI_right_MISO1    |        | Input               | SPI Sender MISO1         