const line = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."

const wrap = (line, maxLen) => {
  let split = line.split(' ');
  let currentLineLength = split[0].length;

  return split.reduce((accum, current) => {

    if (currentLineLength + ' '.length + current.length > maxLen) {
      accum += ('\n' + current);
      currentLineLength = (current.length + ' '.length);
      console.log('if current length', currentLineLength);
    }
    else {
      accum += (' ' + current);
      currentLineLength += (current.length + ' '.length);
      console.log('CURRENT WORD', current);
      console.log('else current length', currentLineLength);
    }
    return accum;
  })
}


console.log(wrap(line, 20));
module.exports = wrap;

