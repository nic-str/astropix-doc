{%set n_columns = 36 %}
{%set n_rowbits = "5 x 36" %}

# Chip Configuration
AstroPix5 is configured trough multiple shift register, a long register consisting of a configuration for the digital part, the analog part including all current and voltage DACs and the column configuration to disable pixels and selection rows/columns for injection. The first bit in the register is the *interrupt_pushpull* bit, while bit 37 of the {{n_columns}}th column config is the last bit.
The second register is used to write the Row Config to write the pixel RAM and to enable/disable individual hit buffers.
The third register is used to write the pulse generator config.
<!--config_digana-start-->
!!! note
    For programing, the first bit *interrupt_pushpull* has to be sent last, and the last bit in this list first.

The chip can be programmed directly via the shift register interface or through the [SPI SR Command](spi.md#shift-register-io-and-spi-command).

{% include-markdown "../astropix3/configuration.md"
    start="<!--sr_principle-start-->"
    end="<!--sr_principle-stop-->"
%}

## Digital Config
| Field Name         | Bits | Default Value | Description                                                                          |
|--------------------|------|---------------|--------------------------------------------------------------------------------------|
| interrupt_pushpull | 1    | 0             | 1: push-pull output for single chip setup<br> 0: open-drain for single or multi chip |
| clkmux             | 1    | 0             | 1: 20MHz from external 0: 20MHz from PLL                                             |
| timerend           | 4    | 1             | Readout FSM clock divider                                                            |
| slowdownldpix      | 4    | 0             | Increase scan chain priority wait time                                               |
| slowdownldcol      | 5    | 0             | Increase DRAM reading wait time                                                      |
| maxcyc             | 6    | 63            | Set max number of columns to read in one FSM cycle                                   |
| tsckdiv            | 4    | 0             | TS clock divider                                                                     |
| sr_out_mux         | 2    | 0             | OD SR readback mux                                                                   |
| clk_slow_mux       | 1    | 0             | Switch between external clock and divided PLL clock                                  |
| disable_spi_right  | 1    | 0             | Set high in last chip                                                                |
| spi_diff           | 1    | 0             | Enable differential SPI bus mode                                                     |
| Reset              | 1    | 0             | Reset                                                                                |
| enPCH              | 1    | 0             | Enable RAM writing                                                                   |
| enRam              | 1    | 0             | Enable RAM bitline precharge                                                         |
| unused             | 5    | 0             |                                                                                      |
| enLVDSterm         | 1    | 1             | Enable differential termination in external clock LVDS receiver                      |
| unused             | 1    | 0             |                                                                                      |
| disLVDS            | 1    | 0             | Disable external clock LVDS receiver                                                 |
| unused             | 1    | 0            |                                                                                      |
| enSPIterm          | 1    | 0             | Enable differential terminations in differential SPI LVDS receiver                   |
| unused             | 1    | 0             |                                                                                      |
| enCP               | 1    | 0             | Enable Vgate Chargepump                                                              |
| enDebugClk         | 1    | 0             | Enable PLL clock debug output                                                        |

## Analog Config
| Field Name | Bits | Default Value | Description                                                      |
|------------|------|---------------|------------------------------------------------------------------|
| DisHiDR    | 1    | 1             | 1: Amplifier high-gain mode<br> 0: Amplifier bilinear gain mode  |
| q01        | 1    | 0             | Biasblock enable (use default values)                            |
| qon0       | 1    | 0             | Biasblock enable (use default values)                            |
| qon1       | 1    | 1             | Biasblock enable (use default values)                            |
| qon2       | 1    | 0             | Biasblock enable (use default values)                            |
| qon3       | 1    | 1             | Biasblock enable (use default values)                            |
| blres      | 6    | 0             | Highpass filter bandwidth 0: low 63: high                        |
| vpdac      | 6    | 0             | TDAC current                                                     |
| vn1        | 6    | 20            | Amplifier input NMOS bias                                        |
| vnfb       | 6    | 1             | Feedback current                                                 |
| vnfoll     | 6    | 10            | Amplifier operating point feedback                               |
| nu5        | 6    | 0             | unused                                                           |
| vndel      | 6    | 10            | Hitbuffer Edgedetector delay                                     |
| incp       | 6    | 0             | PLL charge pump current                                          |
| invco      | 6    | 0             | PLL VCO additional current                                       |
| vn2        | 6    | 0             | Additional Amplifier input NMOS bias to increase maximum current |
| vnfoll2    | 6    | 1             | Low pass filter bandwidth 0: low 63: high                        |
| vnbias     | 6    | 10            | N-well bias                                                      |
| vpload     | 6    | 5             | Amplifier load current                                           |
| nu13       | 6    | 0             | unused                                                           |
| vncomp     | 6    | 2             | Comparator bias current                                          |
| vpfoll     | 6    | 30            | Ampout multiplexer current                                       |
| nu16       | 6    | 0             | unused                                                           |
| vprec      | 6    | 30            | Levelshifter Pullup current                                      |
| vnrec      | 6    | 30            | Levelshifter Receiver load current                               |
| vnlvds     | 6    | 10            | LVDS driver current                                              |
| vploadcomp | 6    | 5             | Comparator PMOS load current                                     |
<!--config_digana-end-->
## VDAC Config
| Field Name | Bits | Default Value | Description                                                   |
|------------|------|---------------|---------------------------------------------------------------|
| blpix:     | 10   | 568           | Comparator baseline voltage                                   |
| thpix:     | 10   | 600           | Comparator threshold voltage for NMOS Amplifier pixels        |
| vcasc2:    | 10   | 625           | Amplifier load cascode voltage                                |
| vgateref:  | 10   | 20            | Vgate reference voltage ($V_\text{gate}=2 V_\text{gateref}$)  |
| vminusref: | 10   | 0             | Vminus reference voltage ($V_\text{minus}=V_\text{minusref}$) |
| vinj:      | 10   | 0             | Injection amplitude                                           |


{% include-markdown "../astropix3/configuration.md"
    start="<!--config_column-start-->"
    end="<!--config_column-end-->"
%}

{% include-markdown "../astropix4/configuration.md"
    start="<!--tdac-start-->"
    end="<!--tdac-stop-->"
    rewrite-relative-urls=false
%}