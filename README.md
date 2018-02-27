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
