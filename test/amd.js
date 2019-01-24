'use strict';

let defineArgs;
global.define = function () {
  defineArgs = arguments;
};

// Require json-eval after global.define is set.
require('../src/index');

const jsonEval = defineArgs[0]();
const tests = require('./tests/tests-node');

describe('json-eval', function () {
  describe('via AMD', tests(jsonEval));
});
