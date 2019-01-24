'use strict';

const expect = require('chai').expect;

const jsonEval = require('../src/index');
const tests = require('./tests/tests-node');

describe('json-eval', tests(jsonEval));
