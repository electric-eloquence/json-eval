'use strict';

process.chdir(__dirname);

const browserify = require('browserify');
const fs = require('fs');
const uglifyES = require('uglify-es');

const src = '../src/index.js';
const bld = '../dist/json-eval.min.js';
const es6 = '../dist/json-eval.es6.min.js';

browserify(src)
  .bundle((err, buf) => {
    if (err) {
      throw err;
    }

    const browserified = buf.toString('utf8');
    const uglified = uglifyES.minify(browserified);

    if (uglified.error) {
      throw uglified.error;
    }

    fs.writeFileSync(bld, uglified.code);
    fs.writeFileSync(es6, `${uglified.code}export default window.jsonEval;`,);
  });
