## Hitbuffer
<!--ap4_tot_calc-start-->
## Time over Threshold calculation

The ToT in seconds can be calculated by subtracting the leading edge timestamp $\text{TS}_1$ from the trailing edge timestamp $\text{TS}_2$.

$$
\text{T}_\text{tot} = ( \text{TS}_2 - \text{TS}_1 ) \text{T}_\text{clk,20}
$$

If the result is negative $\text{T}_\text{tot} < 0$, which can happen if $\text{TS}_2$ wraps over and is finally smaller than $\text{TS}_1$, a correction factor of $2^{\text{N,TSbits}}$ needs to be added:

$$
\text{T}_\text{tot} = \text{T}_\text{tot} + 2^{17}
$$
<!--ap4_tot_calc-stop-->

## EoC
## TDC

