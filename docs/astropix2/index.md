# AstroPix2 Specifications
Submission Status: Submitted in 2021

## Summary
### Supplies
- Analog Supply VDDA: 1.8V
- Analog Supply VSSA: 1.2V
- Digital Supply VDDD: 1.8V
- Analog Ground GNDA
- Digital Ground GNDD
- Sensor Reverse Bias Voltage: 0 to -400V with respect to GNDA
- External Bias Voltages: 4 * (0-1.8V configurable)

### Pixel Matrix
- 250u Pixel Pitch and 250u Pixel Size
- 35 x 35 pixels
- NMOS amplifier
- Pixel Dynamic Range 20 keV - 250 keV
- Pixel Comparator Outputs Row/Column OR wired

### Matrix Digitisation
- Time over Threshold (ToT) counter 12 bit @ 200Mhz (1% @ 700keV) for each column/row (Pixels wired OR in row/column)
- Time of Arrival timestamp counter 8 bit @ 2Mhz


### Digital Interface
- TS Clock: 2Mhz with half period max. delay over ~20 Chip row
- LVDS Clock: Independently running in each chip
- Common Interrupt for row wake-up
- Common Hold for data discarding
- Unique ID for each APS
- 5 QSPI I/O: Quad  SPI in Daisy Chain
- CLK 20 Mhz : Chip to Chip
- MOSI: Chip to Chip (Left to right in the chain)
- MISO[1:0] : Chip to Chip (right to left in the chain)
- CS (Chips Select): right to left to synchronize Chip output and input stages

### Auxiliary Sensors
- 4 unbuffered temperature sensors
