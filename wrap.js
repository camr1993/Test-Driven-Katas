const line = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."

const wrap = (line, maxLen) => {
  let split = line.split(' ');
  let currentLineLength = 0;
  return split.reduce((accum,current) => {
    if (accum.length + ' '.length + current.length > 20) {
      accum += ('\n' + current);
      currentLineLength = current.length;
    }
    else {
      accum += (' ' + current);
      currentLineLength += accum;
    }
    return accum;
  })
}

console.log(wrap(line, 20));


module.exports = wrap;
