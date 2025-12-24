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
            {bits: 16,  name: '0xFFFE', type: 3},
            {bits: 16,  name: 'Temp1', type: 4},
            {bits: 16,  name: 'Temp2', type: 4},
            {bits: 8,  name: 'BL', type: 4},

        ], config:{bits: 64, vflip: true}
    }
    </code>
</pre>

<pre>
    <code class="wavedrom">
    {
        reg:[
            {bits: 8,  name: 'Header', type: 2},
            {bits: 16,  name: '0xFFFD', type: 3},
            {bits: 8,  name: 'Th', type: 4},
            {bits: 8,  name: 'Vcasc2', type: 4},
            {bits: 8,  name: 'GateRef', type: 4},
            {bits: 8,  name: 'Vminus', type: 4},
            {bits: 8,  name: 'Vinj', type: 4},

        ], config:{bits: 64, vflip: true}
    }
    </code>
</pre>