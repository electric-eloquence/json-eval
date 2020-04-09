/* eslint-disable strict */

const expectation = require('./expectation');

module.exports = function () {
  it('parses unwrapped keys, containing backslashes', function () {
    expect($('.assertion-0').getText()).to.equal(expectation[0]);
    expect($('.assertion-1').getText()).to.equal(expectation[1]);
    expect($('.assertion-2').getText()).to.equal(expectation[2]);
    expect($('.assertion-3').getText()).to.equal(expectation[3]);
  });

  it('parses unwrapped keys, containing minus signs', function () {
    expect($('.assertion-4').getText()).to.equal(expectation[4]);
    expect($('.assertion-5').getText()).to.equal(expectation[5]);
    expect($('.assertion-6').getText()).to.equal(expectation[6]);
    expect($('.assertion-7').getText()).to.equal(expectation[7]);
  });

  it('parses multiple unwrapped keys, containing backslashes and minus signs, with different amounts of spacing\
', function () {
    expect($('.assertion-8').getText()).to.equal(expectation[8]);
    expect($('.assertion-9').getText()).to.equal(expectation[9]);
    expect($('.assertion-10').getText()).to.equal(expectation[10]);
    expect($('.assertion-11').getText()).to.equal(expectation[11]);
  });

  it('parses unwrapped keys, containing tildes, with different amounts of spacing', function () {
    expect($('.assertion-12').getText()).to.equal(expectation[12]);
    expect($('.assertion-13').getText()).to.equal(expectation[13]);
    expect($('.assertion-14').getText()).to.equal(expectation[14]);
    expect($('.assertion-15').getText()).to.equal(expectation[15]);
  });

  it('parses multiple unwrapped keys, containing backslashes, minus signs and tildes, with different amounts of \
spacing', function () {
    expect($('.assertion-16').getText()).to.equal(expectation[16]);
    expect($('.assertion-17').getText()).to.equal(expectation[17]);
    expect($('.assertion-18').getText()).to.equal(expectation[18]);
    expect($('.assertion-19').getText()).to.equal(expectation[19]);
  });

  it('parses unwrapped keys, containing plus signs, with unwrapped values', function () {
    expect($('.assertion-20').getText()).to.equal(expectation[20]);
    expect($('.assertion-21').getText()).to.equal(expectation[21]);
    expect($('.assertion-22').getText()).to.equal(expectation[22]);
    expect($('.assertion-23').getText()).to.equal(expectation[23]);
  });

  it('parses multiple wrapped and unwrapped keys, containing colons, backslashes and minus signs, with unwrapped values\
 1st in the list', function () {
    expect($('.assertion-24').getText()).to.equal(expectation[24]);
    expect($('.assertion-25').getText()).to.equal(expectation[25]);
    expect($('.assertion-26').getText()).to.equal(expectation[26]);
    expect($('.assertion-27').getText()).to.equal(expectation[27]);
  });

  it('parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values\
 midway in the list', function () {
    expect($('.assertion-28').getText()).to.equal(expectation[28]);
    expect($('.assertion-29').getText()).to.equal(expectation[29]);
    expect($('.assertion-30').getText()).to.equal(expectation[30]);
    expect($('.assertion-31').getText()).to.equal(expectation[31]);
  });

  it('parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values\
 last in the list', function () {
    expect($('.assertion-32').getText()).to.equal(expectation[32]);
    expect($('.assertion-33').getText()).to.equal(expectation[33]);
    expect($('.assertion-34').getText()).to.equal(expectation[34]);
    expect($('.assertion-35').getText()).to.equal(expectation[35]);
  });
};
