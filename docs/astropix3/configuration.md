# Chip Configuration

AstroPix3 is configured trough a long shift register, consisting of a configuration for the digital part, the analog part including all current and voltage dacs and the column configuration to disable pixels and selection rows/columns for injection. The first bit in the register is the *interrupt_pushpull* bit, while bit 37 of the 35th column config is the last bit.
<!--config_digana-start-->
!!! note
    For programing, the first bit *interrupt_pushpull* has to be sent last, and the last bit in this list first.

The chip can be programmed directly via the shift register interface or through the [SPI SR Command](spi.md#shift-register-io-and-spi-command).

## Digital Config
| Field Name         | Bits | Default Value | Description |
|--------------------|------|---------------| -----------|
| interrupt_pushpull | 1    | 1           |1: push-pull output for single chip setup<br> 0: open-drain for single or multi chip |
| en_inj             | 18   | 0           |unused|
| reset              | 1    | 0           |unused|
| extrabits          | 15   | 0           |unused|

## Analog Config

| Field Name         | Bits | Default Value | Description |
|--------------------|------|---------------| -----------|
| DisHiDR            | 1    | 1           |1: Amplifier high-gain mode<br> 0: Amplifier bilinear gain mode|
| q01                | 1    | 0           |Biasblock enable (use default values)|
| qon0               | 1    | 0           |Biasblock enable (use default values)|
| qon1               | 1    | 1           |Biasblock enable (use default values)|
| qon2               | 1    | 0           |Biasblock enable (use default values)|
| qon3               | 1    | 1           |Biasblock enable (use default values)|
| blres              | 6    | 0             |Highpass filter bandwidth 0: low 63: high|
| nu1                | 6    | 0             |unused|
| vn1                | 6    | 20            |Amplifier input NMOS bias|
| vnfb               | 6    | 1             |Feedback current|
| vnfoll             | 6    | 10            |Amplifier operating point feedback|
| nu5                | 6    | 0             |unused|
| nu6                | 6    | 0             |unused|
| nu7                | 6    | 0             |unused|
| nu8                | 6    | 0             |unused|
| vn2                | 6    | 0             |Additional Amplifier input NMOS bias to increase maximum current|
| vnfoll2            | 6    | 1             |Low pass filter bandwidth 0: low 63: high|
| vnbias             | 6    | 10            |N-well bias|
| vpload             | 6    | 5             |Amplifier load current|
| vnpmos             | 6    | 0             |Amplifier input PMOS bias|
| vncomp             | 6    | 2             |Comparator bias current|
| vpfoll             | 6    | 30            |Ampout multiplexer current|
| nu16               | 6    | 0             |unused|
| vprec              | 6    | 30            |Levelshifter Pullup current|
| vnrec              | 6    | 30            |Levelshifter Receiver load current|
<!--config_digana-end-->
## VDAC Config
| Field Name | Bits | Default Value | Description |
|------------|------|---------------|-------------|
| blpix:     | 10   | 568           |  Comparator baseline voltage          |
| thpix:     | 10   | 600           |  Comparator threshold voltage for NMOS Amplifier pixels         |
| vcasc2:    | 10   | 625           |  Amplifier load cascode voltage           |
| nu1:       | 10   | 512           |  unused            |
| thpmos:    | 10   | 682           |  Comparator threshold voltage for PMOS Amplifier pixels           |
| vinj:      | 10   | 0             |  Injection amplitude           |

<!--config_column-start-->
## Column Config
Each column incorporates a 38 bit shift register, and each columns are connected in series starting at column 0 to column 34.
{% include-markdown "./configuration/format_col_config.md" %}

For column n from 0 to 34:

* Bit 37: AmpOut Mux enable
* Bit 36: Enable Column for injection
* Bit 35-1: Enable Pixel comparators in column
    * Bit 35 is row 34
    * Bit 1 is row 0
- Bit 0: Enable Row n for Injection

!!! warning

    Set AmpOut bit only in one column

<!--config_column-end-->