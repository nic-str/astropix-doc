## Hardware
### Chip Carrier PCBs
The chip carrier PCBs feature a PCIe card edge connector and share the same dimensions W: 51.3 x H: 57.3.

The design files including Gerber and assembly data are available on Github:

| Chipversion | EDA Tool | Project                                                                      |
|-------------|----------|------------------------------------------------------------------------------|
| 1           | Altium   | [AstroPix1 PCB](https://github.com/AstroPix/astropix-pcbs/tree/main/AstroPix1) |
| 2           | KiCAD    | [AstroPix2 PCB](https://github.com/AstroPix/astropix-pcbs/tree/main/AstroPix2) |
| 3           | KiCAD    | [AstroPix3 PCB](https://github.com/AstroPix/astropix-pcbs/tree/main/AstroPix3) |
| 4           | KiCAD    | [AstroPix4 PCB](https://github.com/AstroPix/astropix-pcbs/tree/main/AstroPix4) |
| 5           | KiCAD    | [AstroPix5 PCB](https://github.com/AstroPix/astropix-pcbs/tree/main/AstroPix5) |

### Gecco Board Configuration

#### Jumper Settings

* **RegRst!** Set to vdd
* **JPGND** Closed
* **JP3V3** Open

#### Resistor placement
Place 100 Ω resistors for the LVDS receivers at the following footprints:

* R30, R31, R32, R33
* R25, R26, R27, R28, R29

### Supply Voltages

Two typical configurations are shown for each chip version:

* **Testing**: Minimal number of external supplies (some rails are bridged).
* **Optimal**: Each rail is supplied independently for best performance.


| Chipversion | Configuration | Supplies                                                                     | Vminus               | Chip Carrier Board Jumpers |
|-------------|---------------|------------------------------------------------------------------------------|----------------------|----------------------------|
| 2           | Testing       | J6=-HV , POW6 = VDD18 = 1.8V, VDD33 = 2.7 V                                  | Voltagecard Slot 4   | JP1: 1-2                   |
| 2           | Optimal       | J6=-HV , POW6 = 1.8 V, VDD18 = 1.8V, VDD33 = 2.7 V                           | Voltagecard Slot 4   | JP1: 1-2                   |
| 3           | Testing       | J6=-HV , POW6 = VDD18 = VSSA = 1.8V, VDD33 = 2.7 V                           | Voltagecard Slot 4   | JP1: 1-2                   |
| 3           | Optimal       | J6=-HV , POW6 = 1.8 V, VDD18 = 1.8V, VSSA = 1.2V, VDD33 = 2.7 V              | Voltagecard Slot 4   | JP1: 1-2                   |
| 4           | Testing       | J6=-HV , POW6 = VDD18 = VSSA = 1.8V, VDD33 = 2.7 V                           | Voltagecard Slot 5   | JP1: 1-2                   |
| 4           | Optimal       | J6=-HV , POW6 = 1.8 V, VDD18 = 1.8V, VSSA = 1.2V, VDD33 = 2.7 V              | Voltagecard Slot 5   | JP1: 1-2                   |
| 5           | Testing       | J7=-HV , POW6 = VDD18 = POW4 = VSSA = 1.8V, VDD33 = 2.7 V                    | Internally generated | All jumpers open           |
| 5           | Optimal       | J7=-HV , POW6 = 1.8 V, POW4 = 1.8V, VDD18 = 1.8V, VSSA = 1.2V, VDD33 = 2.7 V | Internally generated | All jumpers open           |

## Software
For AstroPix3 and more recent versions, the recommended software and firmware is [astep-fw branch:dev_richard](https://github.com/AstroPix/astep-fw/tree/dev_richard). The documentation can be found [here](https://astropix.github.io/astep-fw/).

The predecessor of astep-fw, [astropix-python](https://github.com/AstroPix/astropix-python) together with [astropix-fw](https://github.com/AstroPix/astropix-fw), is in maintenance mode.