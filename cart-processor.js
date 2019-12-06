module.exports = (inputs, outputs) => {
  const in1 = inputs["0"];
  const in2 = inputs["1"];
  const out = outputs["0"];

  in1.on('data', (data) => echo('stream-1', data));
  in2.on('data', (data) => echo('stream-2', data));

  in1.on('end', () => console.log('stream-1 ignoring end'));
  in2.on('end', () => console.log('stream-2 ignoring end'));

  in1.on('error', console.error);
  in2.on('error', console.error);
  out.on('error', console.error);

  function echo(stream, data) {
    console.log(stream, data);
    out.write( { stream, data } );
  }
};

module.exports.$interactionModel = 'node-streams';
module.exports.$arity = 3;

console.log('jurgenwashere')