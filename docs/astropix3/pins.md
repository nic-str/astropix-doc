!!! warning

    - Unused inputs must be tied to ground unless otherwise specified.
    - Unused outputs should be left unconnected.
    - Unused bidirectional pins should be left unconnected.

## Recommended Operating Parameters

| Parameter                            | Min    | Typ    | Max    | Comment                                                                |
|--------------------------------------|--------|--------|--------|------------------------------------------------------------------------|
| vdda!                                | 1.62 V | 1.8 V  | 1.98 V | All pads internally connected - add decoupling on each pad if possible |
| vdd!                                 | 1.62 V | 1.8 V  | 1.98 V | All pads internally connected - add decoupling on each pad if possible |
| vssa!                                | 1.62 V | 1.2 V  | 1.98 V | All pads internally connected - add decoupling on each pad if possible |
| HV                                   | 0 V     | -150 V | -350 V | All pads internally connected - Negative Bias for Pixel Sensors        |
| LVDS receiver common mode            | 0.8 V   | 1.2V   |        |                                                                        |
| LVDS receiver differential amplitude |        | > 0.2 V  |        |                                                                        |
| LVDS receiver input capacitance      |        | ~3 pF   |        |                                                                        |

## AstroPix3 Pins

!!! note

    Pins starting with **B** are located at the **bottom**, **L** on the **left** and **R** on the **right** side of the chip

| Pin | Name               | Supply | TYPE                | Description                                                           |
|-----|--------------------|---------|---------------------|-----------------------------------------------------------------------|
| B1  | sub!               | HV     | Power               | HV substrate Bias                                                     |
| B2  | sub!               | HV     | Power               | HV substrate Bias                                                     |
| B3  | sub!               | HV     | Power               | HV substrate Bias                                                     |
| B4  | sub!               | HV     | Power               | HV substrate Bias                                                     |
| B5  | subpixels          | float   | Power               |                                                                       |
| B6  | vssaPmos!          | 1.2 V   | Power               | PMOS Amplifier supply for Col0-2 pixels                               |
| B7  | vssaPmos!          | 1.2 V   | Power               | PMOS Amplifier supply for Col0-2 pixels                               |
| B8  | vdda!              | 1.8 V   | Power               |                                                                       |
| B9  | gnda!              |         | Power               |                                                                       |
| B10 | vdda!              | 1.8 V   | Power               |                                                                       |
| B11 | gnda!              |         | Power               |                                                                       |
| B12 | vssa!              | 1.2 V   | Power               |                                                                       |
| B13 | vssa!              | 1.2 V   | Power               |                                                                       |
| B14 | vdda!              | 1.8 V   | Power               |                                                                       |
| B15 | gnda!              |         | Power               |                                                                       |
| B16 | vdda!              | 1.8 V   | Power               |                                                                       |
| B17 | gnda!              |         | Power               |                                                                       |
| B18 | vssa!              | 1.2 V   | Power               |                                                                       |
| B19 | vssa!              | 1.2 V   | Power               |                                                                       |
| B20 | vdda!              | 1.8 V   | Power               |                                                                       |
| B21 | gnda!              |         | Power               |                                                                       |
| B22 | vdda!              | 1.8 V   | Power               |                                                                       |
| B23 | gnda!              |         | Power               |                                                                       |
| B24 | vssa!              | 1.2 V   | Power               |                                                                       |
| B25 | vssa!              | 1.2 V   | Power               |                                                                       |
| B26 | sample_clock_p     |         | Input               | LVDS <200 MHz Clock for ToT counter<br>  (Connect to gnd! if Single ended clock is used)                         |
| B27 | sample_clock_n     |         | Input               | LVDS <200 MHz Clock for ToT counter<br>  (Connect to vdd! if Single ended clock is used)                            |
| B28 | vdd!               | 1.8 V   | Power               |                                                                       |
| B29 | gnd!               |         | Power               |                                                                       |
| B30 | interrupt          |         | Output (Open-Drain) | Active low status signal (0: data to read out 1: no data to read out) |
| B31 | res_n              |         | Input               | Active low global reset                                               |
| B32 | timestamp_clk      |         | Input               | Single ended 2.5 MHz ToA clock                                        |
| B33 | hold               |         | Input               | Active high hold pauses sending hit data via SPI                      |
| B34 | sr_CK1             |         | Input               | SPI Fallback: Clock1 for Chip Configuration                           |
| B35 | sr_CK2             |         | Input               | SPI Fallback: Clock2 for Chip Configuration                           |
| B36 | sr_LOAD            |         | Input               | SPI Fallback: Load for Chip Configuration                             |
| B37 | sr_SIN             |         | Input               | SPI Fallback: In for Chip Configuration                               |
| B38 | sr_RB              |         | Input               | SPI Fallback: Readback for Chip Configuration                         |
| B39 | sr_SOUT            |         | Output              | SPI Fallback: Out for Chip Configuration                              |
| B40 | vdd!               | 1.8 V   | Power               |                                                                       |
| B41 | gnd!               |         | Power               |                                                                       |
| B42 | nc                 |         |                     |                                                                       |
| B43 | nc                 |         |                     |                                                                       |
| B44 | vssa!              | 1.2 V   | Power               |                                                                       |
| B45 | vssa!              | 1.2 V   | Power               |                                                                       |
| B46 | vdda!              | 1.8 V   | Power               |                                                                       |
| B47 | vdda!              | 1.8 V   | Power               |                                                                       |
| B48 | gnda!              |         | Power               |                                                                       |
| B49 | gnda!              |         | Power               |                                                                       |
| B50 | VPBias             |         | BiDir               | Reference current                                                     |
| B51 | VN                 |         | BiDir               | NMOS Amplifier current                                                |
| B52 | blpix              |         | BiDir               | Comparator baseline voltage                                           |
| B53 | VPLoad             |         | BiDir               | Amplifier load current                                                |
| B54 | gnda!              |         | Power               |                                                                       |
| B55 | vdda!              | 1.8 V   | Power               |                                                                       |
| B56 | Inj                |         | BiDir               | Analog Injection                                                      |
| B57 | gnda!              |         | Power               |                                                                       |
| B58 | ThPix              |         | BiDir               | Comparator threshold voltage for NMOS Amplifier pixels                |
| B59 | vminuspix          |  0.9 V  | Power               | Levelshifter low level                                                     |
| B60 | gnda!              |         | Power               |                                                                       |
| B61 | vdda!              | 1.8 V   | Power               |                                                                       |
| B62 | ampout             |         | Output              | Analog multiplexer output for Row0 pixels                             |
| B63 | Qdac<0>            |         | Output              | Config bit to check configuration                                     |
| B64 | Qdac<1>            |         | Output              | Config bit to check configuration                                     |
| B65 | vssa!              | 1.2 V   | Power               |                                                                       |
| B66 | vdda!              | 1.8 V   | Power               |                                                                       |
| B67 | gnda!              |         | Power               |                                                                       |
| B68 | Vtemp0             |         | Output              | Analog temperature sensor1                                            |
| B69 | Vtemp1             |         | Output              | Analog temperature sensor2                                            |
| B70 | Vcasc2!            |         | BiDir               | Load cascode voltage                                                  |
| B71 | VNPMOS             |         | BiDir               | PMOS Amplifier current                                                |
| B72 | vdda!              | 1.8 V   | Power               |                                                                       |
| B73 | gnda!              |         | Power               |                                                                       |
| B74 | Vtemp2             |         | Output              | Analog temperature sensor3                                            |
| B75 | Vtemp3             |         | Output              | Analog temperature sensor4                                            |
| B76 | VCasc              |         | BiDir               | Amplifier input cascode voltage                                       |
| B77 | ThPMOS             |         | BiDir               | Comparator threshold voltage for PMOS Amplifier pixels                |
| B78 | vssa!              | 1.2 V   | Power               |                                                                       |
| B79 | vdda!              | 1.8 V   | Power               |                                                                       |
| B80 | gnda!              |         | Power               |                                                                       |
| B81 | vssa!              | 1.2 V   | Power               |                                                                       |
| B82 | vdda!              | 1.8 V   | Power               |                                                                       |
| B83 | gnda!              |         | Power               |                                                                       |
| B84 | DigInj             |         | Input               | Digital injection                                                     |
| B85 | vdd!               | 1.8 V   | Power               |                                                                       |
| B86 | gnd!               |         | Power               |                                                                       |
| B87 | ring4              |         |                     |                                                                       |
| B88 | ring3              |         |                     |                                                                       |
| B89 | ring2              |         |                     |                                                                       |
| B90 | ring1              |         |                     |                                                                       |
| B91 | sub!               | HV     | Power               |                                                                       |
| B92 | sub!               | HV     | Power               |                                                                       |
| B93 | sub!               | HV     | Power               |                                                                       |
| B94 | sub!               | HV     | Power               |                                                                       |
| L1  | SPI_left_MISO1     |         | Output              | SPI Peripheral MISO1                                                  |
| L2  | SPI_left_MISO0     |         | Output              | SPI Peripheral MISO0                                                  |
| L3  | SPI_left_MOSI      |         | Input               | SPI Peripheral MOSI                                                   |
| L4  | SPI_left_CLK       |         | Input               | SPI Clock input                                                       |
| L5  | SPI_left_CSN       |         | Input               | SPI Chip Select (active-low) input                                    |
| L6  | sample_clock_left  |         | Output              | Single Ended ToT clock input                                          |
| R1  | sample_clock_right |         | Output              | Single Ended ToT clock output                                         |
| R2  | SPI_right_CSN      |         | Output              | SPI Chip Select (active-low) output                                   |
| R3  | SPI_right_CLK      |         | Output              | SPI Clock output                                                      |
| R4  | SPI_right_MOSI     |         | Output              | SPI Sender MOSI                                                       |
| R5  | SPI_right_MISO0    |         | Input               | SPI Sender MISO0                                                      |
| R6  | SPI_right_MISO1    |         | Input               | SPI Sender MISO1                                                      |