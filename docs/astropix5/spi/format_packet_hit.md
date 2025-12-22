<!--<pre>
    <code class="wavedrom">
    {
        reg:[
            {bits: 1,  name: 'Header', type: 2},
            {bits: 1,  name: 'Row [4:0], Col [4:2]', type: 3},
            {bits: 1,  name: 'Col[1:0]', type: 4},
            {bits: 1,  name: 'ToT MSB', type: 5},
            {bits: 1,  name: 'ToT LSB', type: 5},
            {bits: 1,  name: 'ToT LSB', type: 5},
            {bits: 1,  name: 'ToT LSB', type: 5},
            {bits: 1,  name: 'ToT LSB', type: 5},
        ], config:{bits: 8, vflip: true}
    }
    </code>
</pre> -->

<pre>
    <code class="wavedrom">
    {
        reg:[
            {bits: 8,  name: 'Header', type: 2},
            {bits: 5,  name: 'Row [4:0]', type: 3},
            {bits: 5,  name: 'Col [4:0]', type: 3},
            {bits: 18,  name: 'TS1 Neg, TS1 [16:0]', type: 4},
            {bits: 5,  name: 'TS1 TDC', type: 4},
            {bits: 18,  name: 'TS2 Neg, TS2 [16:0]', type: 5},
            {bits: 5,  name: 'TS2 TDC', type: 5},
        ], config:{bits: 64, vflip: false}
    }
    </code>
</pre>