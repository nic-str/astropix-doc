!!! warning

    Unused inputs should be connected to ground unless explicitly stated.  
    Unused outputs should be left floating.


# AstroPix3 Pins

| Pin | Name               | Voltage | TYPE                | Description                                                           |
|-----|--------------------|---------|---------------------|-----------------------------------------------------------------------|
| B1  | sub!               | -HV     | POWER               | HV substrate Bias                                                     |
| B2  | sub!               | -HV     | POWER               | HV substrate Bias                                                     |
| B3  | sub!               | -HV     | POWER               | HV substrate Bias                                                     |
| B4  | sub!               | -HV     | POWER               | HV substrate Bias                                                     |
| B5  | subpixels          | float   | POWER               |                                                                       |
| B6  | vssaPmos!          | 1.2 V   | POWER               | PMOS Amplifier supply for Col0-2 pixels                               |
| B7  | vssaPmos!          | 1.2 V   | POWER               | PMOS Amplifier supply for Col0-2 pixels                               |
| B8  | vdda!              | 1.8 V   | POWER               |                                                                       |
| B9  | gnda!              |         | POWER               |                                                                       |
| B10 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B11 | gnda!              |         | POWER               |                                                                       |
| B12 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B13 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B14 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B15 | gnda!              |         | POWER               |                                                                       |
| B16 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B17 | gnda!              |         | POWER               |                                                                       |
| B18 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B19 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B20 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B21 | gnda!              |         | POWER               |                                                                       |
| B22 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B23 | gnda!              |         | POWER               |                                                                       |
| B24 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B25 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B26 | sample_clock_p     |         | Input               | Differential <200 MHz Clock for ToT counter<br>  (Connect to gnd! if Single ended clock is used)                         |
| B27 | sample_clock_n     |         | Input               | Differential <200 MHz Clock for ToT counter<br>  (Connect to vdd! if Single ended clock is used)                            |
| B28 | vdd!               | 1.8 V   | POWER               |                                                                       |
| B29 | gnd!               |         | POWER               |                                                                       |
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
| B40 | vdd!               | 1.8 V   | POWER               |                                                                       |
| B41 | gnd!               |         | POWER               |                                                                       |
| B42 | nc                 |         |                     |                                                                       |
| B43 | nc                 |         |                     |                                                                       |
| B44 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B45 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B46 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B47 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B48 | gnda!              |         | POWER               |                                                                       |
| B49 | gnda!              |         | POWER               |                                                                       |
| B50 | VPBias             |         | BiDir               | Reference current                                                     |
| B51 | VN                 |         | BiDir               | NMOS Amplifier current                                                |
| B52 | blpix              |         | BiDir               | Comparator baseline voltage                                           |
| B53 | VPLoad             |         | BiDir               | Amplifier load current                                                |
| B54 | gnda!              |         | POWER               |                                                                       |
| B55 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B56 | Inj                |         | BiDir               | Analog Injection                                                      |
| B57 | gnda!              |         | POWER               |                                                                       |
| B58 | ThPix              |         | BiDir               | Comparator threshold voltage for NMOS Amplifier pixels                |
| B59 | vminuspix          |  0.9 V  | POWER               | Levelshifter low level                                                     |
| B60 | gnda!              |         | POWER               |                                                                       |
| B61 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B62 | ampout             |         | Output              | Analog multiplexer output for Row0 pixels                             |
| B63 | Qdac<0>            |         | Output              | Config bit to check configuration                                     |
| B64 | Qdac<1>            |         | Output              | Config bit to check configuration                                     |
| B65 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B66 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B67 | gnda!              |         | POWER               |                                                                       |
| B68 | Vtemp0             |         | Output              | Analog temperature sensor1                                            |
| B69 | Vtemp1             |         | Output              | Analog temperature sensor2                                            |
| B70 | Vcasc2!            |         | BiDir               | Load cascode voltage                                                  |
| B71 | VNPMOS             |         | BiDir               | PMOS Amplifier current                                                |
| B72 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B73 | gnda!              |         | POWER               |                                                                       |
| B74 | Vtemp2             |         | Output              | Analog temperature sensor3                                            |
| B75 | Vtemp3             |         | Output              | Analog temperature sensor4                                            |
| B76 | VCasc              |         | BiDir               | Amplifier input cascode voltage                                       |
| B77 | ThPMOS             |         | BiDir               | Comparator threshold voltage for PMOS Amplifier pixels                |
| B78 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B79 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B80 | gnda!              |         | POWER               |                                                                       |
| B81 | vssa!              | 1.2 V   | POWER               |                                                                       |
| B82 | vdda!              | 1.8 V   | POWER               |                                                                       |
| B83 | gnda!              |         | POWER               |                                                                       |
| B84 | DigInj             |         | Input               | Digital injection                                                     |
| B85 | vdd!               | 1.8 V   | POWER               |                                                                       |
| B86 | gnd!               |         | POWER               |                                                                       |
| B87 | ring4              |         |                     |                                                                       |
| B88 | ring3              |         |                     |                                                                       |
| B89 | ring2              |         |                     |                                                                       |
| B90 | ring1              |         |                     |                                                                       |
| B91 | sub!               | -HV     | POWER               |                                                                       |
| B92 | sub!               | -HV     | POWER               |                                                                       |
| B93 | sub!               | -HV     | POWER               |                                                                       |
| B94 | sub!               | -HV     | POWER               |                                                                       |
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