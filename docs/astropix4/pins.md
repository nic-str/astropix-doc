!!! warning

    - Unused inputs must be tied to ground unless otherwise specified.
    - Unused outputs should be left unconnected.
    - Unused bidirectional pins should be left unconnected.

## Recommended Operating Parameters
### Supply Voltages

| Parameter | Min    | Typ    | Max    | Typ. Current | Comment                                                                |
|-----------|--------|--------|--------|--------------|------------------------------------------------------------------------|
| vdda!     | 1.62 V | 1.8 V  | 1.98 V | 1 mA         | All pads internally connected - add decoupling on each pad if possible |
| vdd!      | 1.62 V | 1.8 V  | 1.98 V | 3 mA         | All pads internally connected - add decoupling on each pad if possible |
| vssa!     | 1.1 V  | 1.2 V  | 1.98 V | 1 mA         | All pads internally connected - add decoupling on each pad if possible |
| vminuspix | 0 V    | 1 V    | 1.98 V | < 100 uA     |                                                                        |
| HV        | 0 V    | -150 V | -350 V | < 100 nA     | All pads internally connected - Negative Bias for Pixel Sensors        |

!!! warning

    The low voltage supplies vdda!, vdd! and vssa! should be turned on at the same time, otherwise the chip can be damaged due to high currents caused by forward biased diodes.

### LVDS Receiver
| Parameter              | Min   | Typ   | Max | Conditions |
|------------------------|-------|-------|-----|------------|
| Common mode voltage    | 0.8 V | 1.2V  |     |            |
| Differential amplitude | 0.2 V | 0.4 V |     |            |
| Input capacitance      |       | ~3 pF |     |            |

### LVDS Driver
| Parameter                 | Min   | Typ    | Max   | Conditions                                   |
|---------------------------|-------|--------|-------|----------------------------------------------|
| Common mode voltage       | 0.8 V | 0.9V   | 1.1 V |                                              |
| Differential amplitude    |       | 0.2 V  |       | Differential termination $R_T = 100~\Omega $ |
| Wake up time after Enable |       | 100 ns |       |                                              |

## Pins

!!! note

    Pins starting with **B** are located at the **bottom**, **L** on the **left** and **R** on the **right** side of the chip

| Pin | Name              | Supply | TYPE                                                           | Description |
|-----|-------------------|--------|----------------------------------------------------------------|-------------|
| B1  | sub!              | HV     | BiDir                                                          |             |
| B2  | sub!              | HV     | BiDir                                                          |             |
| B3  | floating_ring     |        | BiDir                                                          |             |
| B4  | dn_ring           |        | BiDir                                                          |             |
| B5  | vdda!             | 1.8 V  | Power                                                          |             |
| B6  | gnda!             |        | Power                                                          |             |
| B7  | vdda!             | 1.8 V  | Power                                                          |             |
| B8  | gnda!             |        | Power                                                          |             |
| B9  | vssa!             | 1.2 V  | Power                                                          |             |
| B10 | vssa!             | 1.2 V  | Power                                                          |             |
| B11 | vdda!             | 1.8 V  | Power                                                          |             |
| B12 | gnda!             |        | Power                                                          |             |
| B13 | HB                |        | Output (Open-Drain)                                            |             |
| B14 | clk20_P           |        | Input (LVDS)                                                   |             |
| B15 | clk20_N           |        | Input (LVDS)                                                   |             |
| B16 | vdd!              | 1.8 V  | Power                                                          |             |
| B17 | gnd!              |        | Power                                                          |             |
| B18 | interrupt         |        | Output (Open-Drain/pushpull see interrupt_pushpull config bit) |             |
| B19 | res_n             |        | Input                                                          |             |
| B20 | clkTS             |        | Input                                                          |             |
| B21 | hold              |        | Input                                                          |             |
| B22 | sr_CK1            |        | Input                                                          |             |
| B23 | sr_CK2            |        | Input                                                          |             |
| B24 | sr_LOAD           |        | Input                                                          |             |
| B25 | sr_SIN            |        | Input                                                          |             |
| B26 | sr_RB             |        | Input                                                          |             |
| B27 | sr_LdTDAC         |        | Input                                                          |             |
| B28 | sr_SOUT           |        | Output                                                         |             |
| B29 | gnd!              |        | Power                                                          |             |
| B30 | vdd!              | 1.8 V  | Power                                                          |             |
| B31 | gnd!              |        | Power                                                          |             |
| B32 | vssa!             | 1.2 V  | Power                                                          |             |
| B33 | vssa!             | 1.2 V  | Power                                                          |             |
| B34 | vdda!             | 1.8 V  | Power                                                          |             |
| B35 | vdda!             | 1.8 V  | Power                                                          |             |
| B36 | gnda!             |        | Power                                                          |             |
| B37 | gnda!             |        | Power                                                          |             |
| B38 | VPBias            |        | BiDir                                                          |             |
| B39 | pamp              |        | BiDir                                                          |             |
| B40 | blpix             |        | BiDir                                                          |             |
| B41 | pload             |        | BiDir                                                          |             |
| B42 | gnda!             |        | Power                                                          |             |
| B43 | vdda!             | 1.8 V  | Power                                                          |             |
| B44 | Inj               |        | BiDir                                                          |             |
| B45 | gnda!             |        | Power                                                          |             |
| B46 | ThPix             |        | BiDir                                                          |             |
| B47 | vminuspix         | 1 V    | BiDir                                                          |             |
| B48 | gnda!             |        | Power                                                          |             |
| B49 | vdda!             | 1.8 V  | Power                                                          |             |
| B50 | ampout            |        | Output                                                         |             |
| B51 | Qdac<0>           |        | Output                                                         |             |
| B52 | Qdac<1>           |        | Output                                                         |             |
| B53 | vssa!             | 1.2 V  | Power                                                          |             |
| B54 | Vcasc2!           |        | BiDir                                                          |             |
| B55 | vdda!             | 1.8 V  | Power                                                          |             |
| B56 | gnda!             |        | Power                                                          |             |
| B57 | Vtemp1            |        | Output                                                         |             |
| B58 | Vtemp2            |        | Output                                                         |             |
| B59 | cascpix           |        | BiDir                                                          |             |
| B60 | Vdac_test         |        | Output                                                         |             |
| B61 | vssa!             | 1.2 V  | Power                                                          |             |
| B62 | vdda!             | 1.8 V  | Power                                                          |             |
| B63 | gnda!             |        | Power                                                          |             |
| B64 | vssa!             | 1.2 V  | Power                                                          |             |
| B65 | vdda!             | 1.8 V  | Power                                                          |             |
| B66 | gnda!             |        | Power                                                          |             |
| B68 | DigInj            |        | Input                                                          |             |
| B69 | vdd!              | 1.8 V  | Power                                                          |             |
| B70 | gnd!              |        | Power                                                          |             |
| B71 | hv_ring           |        | Power                                                          |             |
|     |                   |        |                                                                |             |
| L1  | spi_left_MISO1    |        | Output                                                         |             |
| L2  | spi_left_MISO0    |        | Output                                                         |             |
| L3  | spi_left_MOSI     |        | Input                                                          |             |
| L4  | spi_left_CLK      |        | Input                                                          |             |
| L5  | spi_left_CSN      |        | Input                                                          |             |
|     |                   |        |                                                                |             |
| R1  | spi_right_CSN     |        | Output                                                         |             |
| R2  | spi_right_CLK     |        | Output                                                         |             |
| R3  | spi_right_MOSI    |        | Output                                                         |             |
| R4  | spi_right_MISO<0> |        | Input                                                          |             |
| R5  | spi_right_MISO<1> |        | Input                                                          |             |

<!-- ## Layout GDS

An encrypted zip file containing the GDS with chipedge and labeled Bondpads can be downloaded [here](ap5_pads.zip){:download="ap5_pads.zip"}.  
A recommended GDS viewer is [KLayout](https://www.klayout.de/build.html) (all platform support). -->