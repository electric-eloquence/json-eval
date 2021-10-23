/* eslint-disable strict */

const expectation = require('./expectation');

module.exports = () => {
  it('parses unwrapped keys, containing backslashes', async () => {
    const assertion0 = await (await $('.assertion-0')).getText();
    const assertion1 = await (await $('.assertion-1')).getText();
    const assertion2 = await (await $('.assertion-2')).getText();
    const assertion3 = await (await $('.assertion-3')).getText();

    expect(assertion0).to.equal(expectation[0]);
    expect(assertion1).to.equal(expectation[1]);
    expect(assertion2).to.equal(expectation[2]);
    expect(assertion3).to.equal(expectation[3]);
  });

  it('parses unwrapped keys, containing minus signs', async () => {
    const assertion4 = await (await $('.assertion-4')).getText();
    const assertion5 = await (await $('.assertion-5')).getText();
    const assertion6 = await (await $('.assertion-6')).getText();
    const assertion7 = await (await $('.assertion-7')).getText();

    expect(assertion4).to.equal(expectation[4]);
    expect(assertion5).to.equal(expectation[5]);
    expect(assertion6).to.equal(expectation[6]);
    expect(assertion7).to.equal(expectation[7]);
  });

  it('parses multiple unwrapped keys, containing backslashes and minus signs, with different amounts of spacing\
', async () => {
    const assertion8 = await (await $('.assertion-8')).getText();
    const assertion9 = await (await $('.assertion-9')).getText();
    const assertion10 = await (await $('.assertion-10')).getText();
    const assertion11 = await (await $('.assertion-11')).getText();

    expect(assertion8).to.equal(expectation[8]);
    expect(assertion9).to.equal(expectation[9]);
    expect(assertion10).to.equal(expectation[10]);
    expect(assertion11).to.equal(expectation[11]);
  });

  it('parses unwrapped keys, containing tildes, with different amounts of spacing', async () => {
    const assertion12 = await (await $('.assertion-12')).getText();
    const assertion13 = await (await $('.assertion-13')).getText();
    const assertion14 = await (await $('.assertion-14')).getText();
    const assertion15 = await (await $('.assertion-15')).getText();

    expect(assertion12).to.equal(expectation[12]);
    expect(assertion13).to.equal(expectation[13]);
    expect(assertion14).to.equal(expectation[14]);
    expect(assertion15).to.equal(expectation[15]);
  });

  it('parses multiple unwrapped keys, containing backslashes, minus signs and tildes, with different amounts of \
spacing', async () => {
    const assertion16 = await (await $('.assertion-16')).getText();
    const assertion17 = await (await $('.assertion-17')).getText();
    const assertion18 = await (await $('.assertion-18')).getText();
    const assertion19 = await (await $('.assertion-19')).getText();

    expect(assertion16).to.equal(expectation[16]);
    expect(assertion17).to.equal(expectation[17]);
    expect(assertion18).to.equal(expectation[18]);
    expect(assertion19).to.equal(expectation[19]);
  });

  it('parses unwrapped keys, containing plus signs, with unwrapped values', async () => {
    const assertion20 = await (await $('.assertion-20')).getText();
    const assertion21 = await (await $('.assertion-21')).getText();
    const assertion22 = await (await $('.assertion-22')).getText();
    const assertion23 = await (await $('.assertion-23')).getText();

    expect(assertion20).to.equal(expectation[20]);
    expect(assertion21).to.equal(expectation[21]);
    expect(assertion22).to.equal(expectation[22]);
    expect(assertion23).to.equal(expectation[23]);
  });

  it('parses multiple wrapped and unwrapped keys, containing colons, backslashes and minus signs, with unwrapped values\
 1st in the list', async () => {
    const assertion24 = await (await $('.assertion-24')).getText();
    const assertion25 = await (await $('.assertion-25')).getText();
    const assertion26 = await (await $('.assertion-26')).getText();
    const assertion27 = await (await $('.assertion-27')).getText();

    expect(assertion24).to.equal(expectation[24]);
    expect(assertion25).to.equal(expectation[25]);
    expect(assertion26).to.equal(expectation[26]);
    expect(assertion27).to.equal(expectation[27]);
  });

  it('parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values\
 midway in the list', async () => {
    const assertion28 = await (await $('.assertion-28')).getText();
    const assertion29 = await (await $('.assertion-29')).getText();
    const assertion30 = await (await $('.assertion-30')).getText();
    const assertion31 = await (await $('.assertion-31')).getText();

    expect(assertion28).to.equal(expectation[28]);
    expect(assertion29).to.equal(expectation[29]);
    expect(assertion30).to.equal(expectation[30]);
    expect(assertion31).to.equal(expectation[31]);
  });

  it('parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values\
 last in the list', async () => {
    const assertion32 = await (await $('.assertion-32')).getText();
    const assertion33 = await (await $('.assertion-33')).getText();
    const assertion34 = await (await $('.assertion-34')).getText();
    const assertion35 = await (await $('.assertion-35')).getText();

    expect(assertion32).to.equal(expectation[32]);
    expect(assertion33).to.equal(expectation[33]);
    expect(assertion34).to.equal(expectation[34]);
    expect(assertion35).to.equal(expectation[35]);
  });
};
