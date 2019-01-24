# json-eval

[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Mac/Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]

This function is a drop-in replacement for `eval()` used for the purpose of 
parsing JSON-like strings into valid JS objects. However, it does not actually 
run `eval()`, thereby averting the damage that executing insecure code can 
cause. It first attempts to parse the string with [JSON5](http://json5.org), so 
in most cases, it is a drop-in replacement for `JSON5.parse()`.

The recommended syntax for the submitted string is that it be valid JSON5. 
However, this function was expressly created to parse the quoting and special 
character escaping scheme employed by Pattern Lab for PHP. When encountering 
that syntax, it will traverse the submitted string and wrap the keys and values 
in double-quotes as necessary.

### Use

CLI:

```bash
npm install json-eval
```

Node.js:

```javascript
const jsonEval = require('json-eval');
const jsObject = jsonEval(jsonLikeString);
```

Browser (ES5):

```html
<script src="json-eval/dist/json-eval.min.js"></script>
<script>
  var jsonEval = window.jsonEval;
  var jsObject = jsonEval(jsonLikeString);
</script>
```

Browser (ES6):

```html
<script type="module">
  import jsonEval from 'json-eval/dist/json-eval.es6.min.js';
  const jsObject = jsonEval(jsonLikeString);
</script>
```

[snyk-image]: https://snyk.io/test/github/electric-eloquence/json-eval/master/badge.svg
[snyk-url]: https://snyk.io/test/github/electric-eloquence/json-eval/master

[travis-image]: https://img.shields.io/travis/electric-eloquence/json-eval.svg?label=mac%20%26%20linux
[travis-url]: https://travis-ci.org/electric-eloquence/json-eval

[appveyor-image]: https://img.shields.io/appveyor/ci/e2tha-e/json-eval.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/e2tha-e/json-eval

[coveralls-image]: https://img.shields.io/coveralls/electric-eloquence/json-eval/master.svg
[coveralls-url]: https://coveralls.io/r/electric-eloquence/json-eval

[license-image]: https://img.shields.io/github/license/electric-eloquence/json-eval.svg
[license-url]: https://raw.githubusercontent.com/electric-eloquence/json-eval/master/LICENSE
