!!! note

    If the PLL is not used, the LVDS Receiver for the external clock must be enabled in the configuration and an appropriate clock must be provided for the chip to work

    **External Clock:** Clkmux 0, DisableLVDS 0, VNCp: x, VNVCO: 0  
    **Internal Clock:** Clkmux 1, DisableLVDS 1, VNCp: 10, VNVCO: 0

## PLL
Since version 4, AstroPix features an integrated Third-Order Type-2 PLL used to generate a 20 MHz clock from an externally provided 2.5 MHz Reference Clock.
$$
F_{\text{OutClk}} = 8 F_{\text{RefClk}}
$$
### Block diagram
It is a single-ended design using TSPC logic in the high frequency parts to reduce the power consumption. The 9-stage current starved VCO is current-controlled through a V-I Converter, used to reduce the VCO Gain and effectively reducing phase noise. The coarse control current can be further controlled by VNVCO current.

![PLL Diagram](../images/astropix5/pll.png){width=1000px}
/// caption
Block Diagram of Third-Order Type-2 PLL to generate a x8 faster clock
///

### Configuration
To use the PLL clock, the clock multiplexer bit in the chip configuration has to be set to 1. The only current which needs to be configured for the PLL to work is the charge pump current set by VNCp, a lower value reduces phase noise but increase the lock time, which fortunately is not important in this application. A good starting point is a current of 2.5 $\mu$A i.e. a VNCp setting of 10. VNVCO can be usually set to 0.

## DLL
It also features an integrated DLL used to regulate the total delay line consisting of 16 delay elements to the reference clock period.
The delay line is an exact replica of the delay line used in the per-Pixel TDCs, therefore allowing the regulation of the TDC delay.

### Block diagram
It is also a single-ended design including a startup controller to prevent harmonic lock and stuck state from being outside the lock-in range.
The control bias voltage for the delay lines is replicated to not influence the filter pole and stability by the load capacitance of the circuit.

![DLL Diagram](../images/astropix5/dll.png){width=1000px}
/// caption
Block Diagram of the DLL with startup controller to control the total delay of the TDCs
///

The delay of a single delay element can be calculated by:
$$
T_{\text{delaycell}} = \dfrac{1}{F_{\text{OutClk}} 16}
$$

This results in a delay of 3.125 ns for a single delay element at a clock speed of 20 MHz.

### Configuration
The only current which needs to be configured for the DLL to work is the charge pump current set by VNCp, which also used by the [PLL](#configuration).