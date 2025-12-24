## Hardware
### Chip Carrier PCBs
The chip carrier PCBs feature a PCIe card edge connector and have all the same size W: 51.3 x H: 57.3.

The project files together with Gerber and assembly data are also available on Github:

| Chipversion | EDA Tool | Project                                                                      |
|-------------|----------|------------------------------------------------------------------------------|
| 1           | Altium   | [AstroPix1 PCB](https://github.com/kit-adl/astropix/tree/main/PCB/AstroPix1) |
| 2           | KiCAD    | [AstroPix2 PCB](https://github.com/kit-adl/astropix/tree/main/PCB/AstroPix2) |
| 3           | KiCAD    | [AstroPix3 PCB](https://github.com/kit-adl/astropix/tree/main/PCB/AstroPix3) |
| 4           | KiCAD    | [AstroPix4 PCB](https://github.com/kit-adl/astropix/tree/main/PCB/AstroPix4) |


### Gecco Board Configuration

#### Jumper Settings

* **RegRst!** Set to vdd
* **JPGND** Closed
* **JP3V3** Open

#### Resistor placement
100 Ohm differential termination resistors for the LVDS Receivers should be placed at:

* R30, R31, R32, R33
* R25, R26, R27, R28, R29

### Supply Voltages

Below different possible configurations are listed, a testing configuration requiring the minimal number of power supplies by bridging supplies together as well as an optimal configuration.

| Chipversion | Configuration | Supplies                                                          | Vminus               | Chip Carrier Board Jumpers |
|-------------|---------------|-------------------------------------------------------------------|----------------------|----------------------------|
| 2           | Testing       | J6=-HV J6, POW6 = VDD18 = 1.8V, VDD33 = 2.7 V                     | Voltagecard Slot 4   | JP1: 1-2                   |
| 2           | Optimal       | J6=-HV J6, POW6 = 1.8 V, VDD18 = 1.8V, VDD33 = 2.7 V              | Voltagecard Slot 4   | JP1: 1-2                   |
| 3           | Testing       | J6=-HV J6, POW6 = VDD18 = VSSA = 1.8V, VDD33 = 2.7 V              | Voltagecard Slot 4   | JP1: 1-2                   |
| 3           | Optimal       | J6=-HV J6, POW6 = 1.8 V, VDD18 = 1.8V, VSSA = 1.2V, VDD33 = 2.7 V | Voltagecard Slot 4   | JP1: 1-2                   |
| 4           | Testing       | J6=-HV J6, POW6 = VDD18 = VSSA = 1.8V, VDD33 = 2.7 V              | Voltagecard Slot 5   | JP1: 1-2                   |
| 4           | Optimal       | J6=-HV J6, POW6 = 1.8 V, VDD18 = 1.8V, VSSA = 1.2V, VDD33 = 2.7 V | Voltagecard Slot 5   | JP1: 1-2                   |
| 5           | Testing       | J6=-HV J6, POW6 = VDD18 = VSSA = 1.8V, VDD33 = 2.7 V              | Internally generated | JP1: 1-2                   |
| 5           | Optimal       | J6=-HV J6, POW6 = 1.8 V, VDD18 = 1.8V, VSSA = 1.2V, VDD33 = 2.7 V | Internally generated | JP1: 1-2                   |

## Software
For using AstroPix2 and AstroPix3 the recommend software and firmware is [astep-fw branch:dev_richard](https://github.com/AstroPix/astep-fw/tree/dev_richard). The documentation can be found [here](https://astropix.github.io/astep-fw/).

It can also be used for AstroPix4, by using the branch [dev_nic](https://github.com/AstroPix/astep-fw/tree/dev_nic).

A legacy software, [astropix-python](https://github.com/AstroPix/astropix-python) together with[astropix-fw](https://github.com/AstroPix/astropix-fw), is available, supporting all chip versions.