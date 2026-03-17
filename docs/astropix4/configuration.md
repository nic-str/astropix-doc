# Chip Configuration

AstroPix4 is configured trough multiple shift register, a long register consisting of a configuration for the digital part, the analog part including all current and voltage DACs and the column configuration to disable pixels and selection rows/columns for injection. The first bit in the register is the *interrupt_pushpull* bit, while bit 37 of the 16th column config is the last bit.
The second register is used to write the Row Config to write the pixel RAM and to enable/disable individual hitbuffers.
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
| unused             | 4    | 1             |                                                                                      |
| slowdownldpix      | 4    | 0             | Increase scan chain priority wait time                                               |
| slowdownldcol      | 5    | 0             | Increase DRAM reading wait time                                                      |
| maxcyc             | 6    | 63            | Set max number of columns to read in one FSM cycle                                   |
| resetckdiv         | 4    | 15            | Set FSM wait time after reset                                                        |
| unused             | 32   | 0             |                                                                                      |
| unused             | 1    | 0             |                                                                                      |
| Reset              | 1    | 0             | Reset                                                                                |
| enPCH              | 1    | 0             | Enable RAM writing                                                                   |
| enRam              | 1    | 0             | Enable RAM bitline precharge                                                         |
| unused             | 5    | 0             |                                                                                      |
| enLVDSterm         | 1    | 1             | Enable differential termination in external clock LVDS receiver                      |
| unused             | 1    | 0             |                                                                                      |
| disLVDS            | 1    | 0             | Disable external clock LVDS receiver                                                 |
| unused             | 5    | 63            |                                                                                      |

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
| vpdac      | 6    | 0             | TDAC current                                                           |
| vn1        | 6    | 20            | Amplifier input NMOS bias                                        |
| vnfb       | 6    | 1             | Feedback current                                                 |
| vnfoll     | 6    | 10            | Amplifier operating point feedback                               |
| nu5        | 6    | 0             | unused                                                           |
| vndel      | 6    | 10            | Hitbuffer Edgedetector delay                                     |
| incp       | 6    | 0             | PLL charge pump current                                                           |
| nu8        | 6    | 0             | unused                                                           |
| vn2        | 6    | 0             | Additional Amplifier input NMOS bias to increase maximum current |
| vnfoll2    | 6    | 1             | Low pass filter bandwidth 0: low 63: high                        |
| vnbias     | 6    | 10            | N-well bias                                                      |
| vpload     | 6    | 5             | Amplifier load current                                           |
| nu13       | 6    | 0             | unused                                        |
| vncomp     | 6    | 2             | Comparator bias current                                          |
| vpfoll     | 6    | 30            | Ampout multiplexer current                                       |
| nu16       | 6    | 0             | unused                                                           |
| vprec      | 6    | 30            | Levelshifter Pullup current                                      |
| vnrec      | 6    | 30            | Levelshifter Receiver load current                               |
<!--config_digana-end-->
## VDAC Config
| Field Name | Bits | Default Value | Description                                            |
|------------|------|---------------|--------------------------------------------------------|
| blpix:     | 10   | 568           | Comparator baseline voltage                            |
| thpix:     | 10   | 600           | Comparator threshold voltage for NMOS Amplifier pixels |
| vcasc2:    | 10   | 625           | Amplifier load cascode voltage                         |
| vtest:     | 10   | 0             | Test voltage |
| vinj:      | 10   | 0             | Injection amplitude                                    |


{% include-markdown "../astropix3/configuration.md"
    start="<!--config_column-start-->"
    end="<!--config_column-end-->"
%}

{%set n_columns = 16 %}
{%set n_rowbits = "5 x 16" %}
<!--tdac-start-->
## Row Config
The row config is stored in a {{n_rowbits}} bit long shift register and applied with the *ld_tdac* signal.
Below is an example for a four pixel row:
{% include-markdown "./tdac/sram_row.md" %}

Each of the {{ n_columns }} pixels per row has a 4 bit SRAM cell. The SRAM cells are written row wise, and rows are selected by setting the corresponding row enable bit to 1.

The 4 bit SRAM per pixel are used to store a 3 bit comparator threshold trimming value and a disable Bit for the hit buffer. The disable Bit can be used to mask hit readout and timestamp capturing for individual pixels.
{% include-markdown "./tdac/sram.md" %}

* To enable the hit buffer set "Hit buffer disable" to 0
* TDAC value 0 means no offset current, while 7 means highest offset current
<!--tdac-stop-->
* **Due to a design flaw in AstroPix4 the linearity of the TDAC is not good for low VNComp and VPDAC currents. Therefore if TDACs are used, VNCOMP should be at least set to 20.**

<!-- ### Offset voltage calculation
With Comparator and TDAC offset current
$$
I_\text{comp, uA}=\frac{1.5}{63} \text{VNCOMP}\\
I_\text{TDAC, uA}=\frac{0.6}{63} \text{VPDAC} \cdot \text{TDACVAL}
$$
The comparator offset voltage can be calculator to:
$$
V_\text{os} = 65 \text{mV} \frac{I_\text{TDAC, uA}}{I_\text{comp, uA}}
$$ -->
<!--tdac-start2-->
### Row Writing

To write a specific SRAM row, the bits have to be written into the TDAC config register with the pattern below.
In addition to the 4 bit Pixel RAM values, there is a row enable bit, which is set to 1 if the corresponding row should be written.
Therefore, if multiple rows should receive the same configuration, they can be written at the same time.

The write-enable bit **enRAMPCH** has to be set to **1** in the chip configuration.

After powering up the chip it is useful to disable all offset currents and enable all hit buffers by writing 5b00001 into every one of the {{ n_columns }} pixels.

!!! info
    After each row write, it is recommended to write the same RAM bits again with all row bits disabled to avoid glitches.


### Row Reading
To read back the RAM values, the following procedure can be used:

1. Set enRAMPCH to zero, to disable write driver
2. Write chip config
3. Set enPCH bit 1, to precharge the bitlines, to avoid flipping
4. Write chip config
5. Set enPCH bit 0, to stop precharging
6. Write chip config
7. Set row bit in the desired row
8. Write row config
9. Perform [SR readback procedure](./configuration.md#readback)


<!--tdac-stop2-->