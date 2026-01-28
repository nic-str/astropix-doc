function calculateRR(toaBits=8,bytesPerHit=10) {
  const n = Number(document.getElementById("n").value);
  const HR = Number(document.getElementById("hr").value);
//   const toaBits = Number(document.getElementById("toa").value);
  const Tckts = Number(document.getElementById("tckts").value);

  // ---- Data Rate ----
  const DR_bytes = n * HR * bytesPerHit;
  const DR_bits = DR_bytes * 8;

  // ---- Latency constraints ----
  const wrapTime = Math.pow(2, toaBits) * Tckts;

  // Worst-case: all chips have hits
  const bytesAllHits = bytesPerHit * n;
  const RR_min = bytesAllHits / wrapTime;   // Bytes/s
  const RR_bits = RR_min * 8;                // bit/s

  const [rrbits_value, rrbits_unit] = calculateUnit(RR_bits)
  const [drbits_value, drbits_unit] = calculateUnit(DR_bits)
  const [wrapTime_value, wrapTime_unit] = calculateUnitTime(wrapTime)

  const spiclock_bits = Math.max(DR_bits, RR_bits) / 2;
  const [spiclock_value, spiclock_unit] = calculateUnit(spiclock_bits);

//   document.getElementById("output").innerHTML = `
//     <strong>Results</strong><br><br>

//     <strong>Peak data rate:</strong><br>
//     DR = ${drbits_value.toFixed(2)} ${drbits_unit}bit/s<br><br>

//     <strong>Latency constraint:</strong><br>
//     ToA wrap time = ${wrapTime_value.toFixed(2)} ${wrapTime_unit}s<br><br>

//     <strong>Minimum readout rate due to latency:</strong><br>
//     RR ≥ ${rrbits_value.toFixed(2)} ${rrbits_unit}bit/s<br><br>

//     <strong>Minimum SPI clock frequency:</strong><br>
//     f<sub>SPI</sub> ≥ ${(rrbits_value/2).toFixed(2)} ${rrbits_unit}Hz
//   `;
document.getElementById("output").innerHTML = `
  <div class="md-card md-shadow--2dp" style="max-width:560px; padding:1em; border:1px solid #e0e0e0; border-radius:6px;">
    <h3 style="margin:0 0 0.5em 0;">Readout Rate — Results</h3>

    <dl style="margin:0; line-height:1.6;">
      <dt style="font-weight:600; margin-top:0.4em;">Peak data rate</dt>
      <dd style="margin:0 0 0.6em 0;">${drbits_value.toFixed(2)} ${drbits_unit}bit/s</dd>

      <dt style="font-weight:600; margin-top:0.4em;">Latency constraint</dt>
      <dd style="margin:0 0 0.6em 0;">ToA wrap time: ${wrapTime_value.toFixed(2)} ${wrapTime_unit}s</dd>

      <dt style="font-weight:600; margin-top:0.4em;">Minimum readout rate due to latency</dt>
      <dd style="margin:0 0 0.6em 0;">RR ≥ ${rrbits_value.toFixed(2)} ${rrbits_unit}bit/s</dd>

      <dt style="font-weight:600; margin-top:0.4em;">Minimum SPI clock</dt>
      <dd style="margin:0 0 0.6em 0;">f<sub>SPI</sub> ≥ ${spiclock_value.toFixed(2)} ${spiclock_unit}Hz</dd>
    </dl>
  </div>
  `
}

function calculateUnit(value) {
    if(value >=1e6) {
        return [(value / 1e6), ' M'];
    } else if (value >=1e3) {
        return [(value / 1e3), ' k'];
    } else {
        return [value, ''];
    }
}

function calculateUnitTime(value) {
    if(value >=1e-3) {
        return [(value * 1e3), ' m'];
    } else if (value >=1e-6) {
        return [(value * 1e6), ' u'];
    } else {
        return [value, ''];
    }
}