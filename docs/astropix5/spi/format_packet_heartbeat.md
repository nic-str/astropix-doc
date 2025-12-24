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
            {bits: 16,  name: '0xFFFF', type: 3},
            {bits: 16,  name: 'Extrabits', type: 4},
            {bits: 16,  name: 'ExtrabitsN', type: 4},
            {bits: 8,  name: 'SEU Counter', type: 5},

        ], config:{bits: 64, vflip: true}
    }
    </code>
</pre>