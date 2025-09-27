<pre>
    <code class="wavedrom">
    { signal : [
        {name: 'ResetN',      wave: '10.1.|..............................'},
        {name: 'hold',        wave: '0....|..............................'},
        {name: 'Interrupt',   wave: 'x1...|..............................'},
        {},
        {name: 'SPI CLK',     wave: '0....|......p.......................'},
        {name: 'SPI MOSI',    wave: 'xxxxx|x.....2.......2.......2.......', data: ['IDLE 0x3D','IDLE 0x3D', 'IDLE 0x3D']},
        {name: 'SPI CSN',     wave: '1....|...0..........................'},
        {name: 'SPI MISO[0]', wave: 'z....|...1..3...3...3...3...3...3...', data: ['IDLE Bit 0,2,4,6','IDLE Bit 0,2,4,6', 'IDLE Bit 0,2,4,6', 'IDLE Bit 0,2,4,6', 'IDLE Bit 0,2,4,6', 'IDLE Bit 0,2,4,6']},
        {name: 'SPI MISO[1]', wave: 'z....|...0..3...3...3...3...3...3...', data: ['IDLE Bit 1,3,5,7','IDLE Bit 1,3,5,7', 'IDLE Bit 1,3,5,7', 'IDLE Bit 1,3,5,7', 'IDLE Bit 1,3,5,7','IDLE Bit 1,3,5,7']},
    ]
}
    </code>
</pre>