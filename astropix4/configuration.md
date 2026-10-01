# Chip Configuration

AstroPix4 is configured trough multiple shift register, a long register consisting of a configuration for the digital part, the analog part including all current and voltage DACs and the column configuration to disable pixels and selection rows/columns for injection. The first bit in the register is the *interrupt_pushpull* bit, while bit 37 of the 16th column config is the last bit. The second register is used to write the Row Config to write the pixel RAM and to enable/disable individual hitbuffers.

Note

For programing, the first bit *interrupt_pushpull* has to be sent last, and the last bit in this list first.

The chip can be programmed directly via the shift register interface or through the [SPI SR Command](https://github.com/nic-str/astropix-doc/astropix4/spi.html#shift-register-io-and-spi-command).

## Shift Register (SR) Interface

The Shift Register Interface is a double clocked 5 Wire serial interface, similar to SPI. The diagram below shows the writing of two bits, one and zero.

### Writing

```
{signal: [
  {name: 'SIN',     wave:  '0..1...0.......' },
  {name: 'CK1',     wave:  '0..10..10......' },
  {name: 'CK2',     wave:  '0....10..10....' },
  {name: 'LOAD',    wave:  '0..........1.0.' }
],

 }
```

### Readback

1. Drive the Readback pin high
1. Toggle CK1 and CK2 once
1. Read the Shift Register Output by monitoring the SOUT output and writing as many dummy bits, as you want to read bits from the register

Below is the timing diagram for the readback of the 2 bit shift register from the write example. After CK2 is high for the first time, the last written bit is visible at SOUT.

```
{signal: [
  {name: 'SIN',     wave:  '0..............' },
  {name: 'CK1',     wave:  '0..10..10......' },
  {name: 'CK2',     wave:  '0....10..10....' },
  {name: 'LOAD',    wave:  '0..............' },
  {name: 'RB',      wave:  '0..1..0........' },
  {name: 'SOUT',    wave:  'x....1...0.....' }
],

 }
```

## Digital Config

| Field Name         | Bits | Default Value | Description                                                                      |
| ------------------ | ---- | ------------- | -------------------------------------------------------------------------------- |
| interrupt_pushpull | 1    | 0             | 1: push-pull output for single chip setup 0: open-drain for single or multi chip |
| clkmux             | 1    | 0             | 1: 20MHz from external 0: 20MHz from PLL                                         |
| unused             | 4    | 1             |                                                                                  |
| slowdownldpix      | 4    | 0             | Increase scan chain priority wait time                                           |
| slowdownldcol      | 5    | 0             | Increase DRAM reading wait time                                                  |
| maxcyc             | 6    | 63            | Set max number of columns to read in one FSM cycle                               |
| resetckdiv         | 4    | 15            | Set FSM wait time after reset                                                    |
| unused             | 32   | 0             |                                                                                  |
| unused             | 1    | 0             |                                                                                  |
| Reset              | 1    | 0             | Reset                                                                            |
| enPCH              | 1    | 0             | Enable RAM writing                                                               |
| enRam              | 1    | 0             | Enable RAM bitline precharge                                                     |
| unused             | 5    | 0             |                                                                                  |
| enLVDSterm         | 1    | 1             | Enable differential termination in external clock LVDS receiver                  |
| unused             | 1    | 0             |                                                                                  |
| disLVDS            | 1    | 0             | Disable external clock LVDS receiver                                             |
| unused             | 5    | 63            |                                                                                  |

## Analog Config

| Field Name | Bits | Default Value | Description                                                      |
| ---------- | ---- | ------------- | ---------------------------------------------------------------- |
| DisHiDR    | 1    | 1             | 1: Amplifier high-gain mode 0: Amplifier bilinear gain mode      |
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
| nu8        | 6    | 0             | unused                                                           |
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

## VDAC Config

| Field Name | Bits | Default Value | Description                                            |
| ---------- | ---- | ------------- | ------------------------------------------------------ |
| blpix:     | 10   | 568           | Comparator baseline voltage                            |
| thpix:     | 10   | 600           | Comparator threshold voltage for NMOS Amplifier pixels |
| vcasc2:    | 10   | 625           | Amplifier load cascode voltage                         |
| vtest:     | 10   | 0             | Test voltage                                           |
| vinj:      | 10   | 0             | Injection amplitude                                    |

## Column Config

Each column incorporates a 38 bit shift register, and all columns are connected in series starting from column 0 to column 34.

```
    {
        reg:[
            {bits: 1,  name: 'Inj', attr: "Row"},
            {bits: 35,  name: 'Pixel Comp Disable[34:0]', attr: 'Pixel Comp Disable'},
            {bits: 1,  name: 'Inj' , attr: 'Col'},
            {bits: 1,  name: 'A', attr: ''},
        ], config: { bits: 38},
    }
```

For column n from 0 to 34:

- Bit 37: AmpOut Mux enable
- Bit 36: Enable Column for injection
- Bit 35-1: Enable Pixel comparators in column (**1:** Disable **0:** Enable)
  - Bit 35 is row 34
  - Bit 1 is row 0
- Bit 0: Enable Row n for Injection

Warning

Set AmpOut bit only in one column

## Row Config

The row config is stored in a 5 x 16 bit long shift register and applied with the *ld_tdac* signal. Below is an example for a four pixel row:

```
    {
        reg:[
            {bits: 1,  name: 'Row 0', type: 4},
            {bits: 4,  name: 'SRAM Pixel 0', type: 3},
            {bits: 1,  name: 'Row 1', type: 4},
            {bits: 4,  name: 'SRAM Pixel 1', type: 3},
            {bits: 1,  name: 'Row 2', type: 4},
            {bits: 4,  name: 'SRAM Pixel 2', type: 3},
            {bits: 1,  name: 'Row 3', type: 4},
            {bits: 4,  name: 'SRAM Pixel 3', type: 3},
        ], config:{bits: 20}
    }
```

Each of the 16 pixels per row has a 4 bit SRAM cell. The SRAM cells are written row wise, and rows are selected by setting the corresponding row enable bit to 1.

The 4 bit SRAM per pixel are used to store a 3 bit comparator threshold trimming value and a disable Bit for the hit buffer. The disable Bit can be used to mask hit readout and timestamp capturing for individual pixels.

```
    {
        reg:[
            {bits: 1,  name: 'Hit buffer disable', type: 3},
            {bits: 3,  name: 'TDAC [2:0]', type: 4},
        ], config:{bits: 4}
    }
```

- To enable the hit buffer set "Hit buffer disable" to 0

- TDAC value 0 means no offset current, while 7 means highest offset current

- **Due to a design flaw in AstroPix4 the linearity of the TDAC is not good for low VNComp and VPDAC currents. Therefore if TDACs are used, VNCOMP should be at least set to 20.**

### Row Writing

To write a specific SRAM row, the bits have to be written into the TDAC config register with the pattern below. In addition to the 4 bit Pixel RAM values, there is a row enable bit, which is set to 1 if the corresponding row should be written. Therefore, if multiple rows should receive the same configuration, they can be written at the same time.

The write-enable bit **enRAMPCH** has to be set to **1** in the chip configuration.

After powering up the chip it is useful to disable all offset currents and enable all hit buffers by writing 5b00001 into every one of the 16 pixels.

Info

After each row write, it is recommended to write the same RAM bits again with all row bits disabled to avoid glitches.

### Row Reading

To read back the RAM values, the following procedure can be used:

1. Set enRAMPCH to zero, to disable write driver
1. Write chip config
1. Set enPCH bit 1, to precharge the bitlines, to avoid flipping
1. Write chip config
1. Set enPCH bit 0, to stop precharging
1. Write chip config
1. Set row bit in the desired row
1. Write row config
1. Perform [SR readback procedure](https://github.com/nic-str/astropix-doc/astropix4/configuration.html#readback)

2026-02-282026-03-17
