'use strict';

const {exec} = require('child_process');
const fs = require('fs');
const path = require('path');

const binPath = path.resolve('node_modules', '.bin');
const src = 'src/index.js';
const bld = 'dist/json-eval.min.js';
const es6 = 'dist/json-eval.es6.min.js';

let cmd = `${binPath}/browserify ${src} | `;
cmd += `${binPath}/uglifyjs -m -o ${bld}`;

exec(cmd, (err, stdout, stderr) => {
  fs.readFile(bld, (err1, data) => {
    if (err1) {
      console.error(err1);
    }

    fs.writeFile(
      es6,
      `${data}export default window.jsonEval;`,
      (err2) => {
        if (err2) {
          console.error(err2);
        }
      }
    );
  });

  if (err) {
    throw err;
  }

  /* eslint-disable no-console */
  if (stderr) {
    console.error(stderr);
  }
});
