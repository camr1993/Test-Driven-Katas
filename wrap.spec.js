const { expect } = require('chai');
const wrap = require('./wrap');
const string21 = "Lorem ipsum dolor."

describe('wrap', () => {
  it('wrap returns a string', () => {
    expect(typeof wrap('', 10)).to.equal('string');
  });

  it('wrap returns a string', () => {
    expect(wrap('', 21).length).to.equal(22);
  });



  xit('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
});
