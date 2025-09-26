# Chip Configuration

| Register Group    | Field Name         | Bits | Default Value | Description |
|-------------------|--------------------|------|---------------| -----------|
| **digitalconfig** | interrupt_pushpull | 1    | 1           |1: push-pull output for single chip setup<br> 0: open-drain for single or multi chip |
|                   | en_inj             | 18   | 0           |unused|
|                   | reset              | 1    | 0           |unused|
|                   | extrabits          | 15   | 0           |unused|
| **biasconfig**    | DisHiDR            | 1    | 1           |1: Amplifier high-gain mode<br> 0: Amplifier bilinear gain mode|
|                   | q01                | 1    | 0           |Biasblock enable (use default values)|
|                   | qon0               | 1    | 0           |Biasblock enable (use default values)|
|                   | qon1               | 1    | 1           |Biasblock enable (use default values)|
|                   | qon2               | 1    | 0           |Biasblock enable (use default values)|
|                   | qon3               | 1    | 1           |Biasblock enable (use default values)|
| **idacs**         | blres              | 6    | 0             |Highpass filter bandwidth 0: low 63: high|
|                   | nu1                | 6    | 0             |unused|
|                   | vn1                | 6    | 20            |Amplifier input NMOS bias|
|                   | vnfb               | 6    | 1             |Feedback current|
|                   | vnfoll             | 6    | 10            |Amplifier operating point feedback|
|                   | nu5                | 6    | 0             |unused|
|                   | nu6                | 6    | 0             |unused|
|                   | nu7                | 6    | 0             |unused|
|                   | nu8                | 6    | 0             |unused|
|                   | vn2                | 6    | 0             |Additional Amplifier input NMOS bias to increase maximum current|
|                   | vnfoll2            | 6    | 1             |Low pass filter bandwidth 0: low 63: high|
|                   | vnbias             | 6    | 10            |N-well bias|
|                   | vpload             | 6    | 5             |Amplifier load current|
|                   | vnpmos             | 6    | 0             |Amplifier input PMOS bias|
|                   | vncomp             | 6    | 2             |Comparator bias current|
|                   | vpfoll             | 6    | 30            |Ampout multiplexer current|
|                   | nu16               | 6    | 0             |unused|
|                   | vprec              | 6    | 30            |Levelshifter Pullup current|
|                   | vnrec              | 6    | 30            |Levelshifter Receiver load current|