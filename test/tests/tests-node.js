'use strict';

const {expect} = require('chai');

const subject = require('./subject');
const expectation = require('./expectation');

// The reason for the hacky scoping of jsonEval is so the end-of-line spacings of these test descriptions and those in
// subject.js and expectation.js match.
let jsonEval;

function testsNode() {
  it('parses unwrapped keys, containing backslashes', function () {
    expect(JSON.stringify(jsonEval(subject[0]))).to.equal(expectation[0]);
    expect(JSON.stringify(jsonEval(subject[1]))).to.equal(expectation[1]);
    expect(JSON.stringify(jsonEval(subject[2]))).to.equal(expectation[2]);
    expect(JSON.stringify(jsonEval(subject[3]))).to.equal(expectation[3]);
  });

  it('parses unwrapped keys, containing minus signs', function () {
    expect(JSON.stringify(jsonEval(subject[4]))).to.equal(expectation[4]);
    expect(JSON.stringify(jsonEval(subject[5]))).to.equal(expectation[5]);
    expect(JSON.stringify(jsonEval(subject[6]))).to.equal(expectation[6]);
    expect(JSON.stringify(jsonEval(subject[7]))).to.equal(expectation[7]);
  });

  it('parses multiple unwrapped keys, containing backslashes and minus signs, with different amounts of spacing\
', function () {
    expect(JSON.stringify(jsonEval(subject[8]))).to.equal(expectation[8]);
    expect(JSON.stringify(jsonEval(subject[9]))).to.equal(expectation[9]);
    expect(JSON.stringify(jsonEval(subject[10]))).to.equal(expectation[10]);
    expect(JSON.stringify(jsonEval(subject[11]))).to.equal(expectation[11]);
  });

  it('parses unwrapped keys, containing tildes, with different amounts of spacing', function () {
    expect(JSON.stringify(jsonEval(subject[12]))).to.equal(expectation[12]);
    expect(JSON.stringify(jsonEval(subject[13]))).to.equal(expectation[13]);
    expect(JSON.stringify(jsonEval(subject[14]))).to.equal(expectation[14]);
    expect(JSON.stringify(jsonEval(subject[15]))).to.equal(expectation[15]);
  });

  it('parses multiple unwrapped keys, containing backslashes, minus signs and tildes, with different amounts of \
spacing', function () {
    expect(JSON.stringify(jsonEval(subject[16]))).to.equal(expectation[16]);
    expect(JSON.stringify(jsonEval(subject[17]))).to.equal(expectation[17]);
    expect(JSON.stringify(jsonEval(subject[18]))).to.equal(expectation[18]);
    expect(JSON.stringify(jsonEval(subject[19]))).to.equal(expectation[19]);
  });

  it('parses unwrapped keys, containing plus signs, with unwrapped values', function () {
    expect(JSON.stringify(jsonEval(subject[20]))).to.equal(expectation[20]);
    expect(JSON.stringify(jsonEval(subject[21]))).to.equal(expectation[21]);
    expect(JSON.stringify(jsonEval(subject[22]))).to.equal(expectation[22]);
    expect(JSON.stringify(jsonEval(subject[23]))).to.equal(expectation[23]);
  });

  it('parses multiple wrapped and unwrapped keys, containing colons, backslashes and minus signs, with unwrapped values\
 1st in the list', function () {
    expect(JSON.stringify(jsonEval(subject[24]))).to.equal(expectation[24]);
    expect(JSON.stringify(jsonEval(subject[25]))).to.equal(expectation[25]);
    expect(JSON.stringify(jsonEval(subject[26]))).to.equal(expectation[26]);
    expect(JSON.stringify(jsonEval(subject[27]))).to.equal(expectation[27]);
  });

  it('parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values\
 midway in the list', function () {
    expect(JSON.stringify(jsonEval(subject[28]))).to.equal(expectation[28]);
    expect(JSON.stringify(jsonEval(subject[29]))).to.equal(expectation[29]);
    expect(JSON.stringify(jsonEval(subject[30]))).to.equal(expectation[30]);
    expect(JSON.stringify(jsonEval(subject[31]))).to.equal(expectation[31]);
  });

  it('parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values\
 last in the list', function () {
    expect(JSON.stringify(jsonEval(subject[32]))).to.equal(expectation[32]);
    expect(JSON.stringify(jsonEval(subject[33]))).to.equal(expectation[33]);
    expect(JSON.stringify(jsonEval(subject[34]))).to.equal(expectation[34]);
    expect(JSON.stringify(jsonEval(subject[35]))).to.equal(expectation[35]);
  });
};

module.exports = function (jsonEval_) {
  jsonEval = jsonEval_;
  return testsNode;
};
