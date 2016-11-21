This function converts JSON-like strings into valid JS objects. The correct 
syntax for the submitted string is that it be eval()-able as a JS object. 
However, this function does not actually run eval(), thereby averting the 
damage that executing insecure code can cause. This function will instead, 
first, try to parse the string with JSON5. If that fails, it will crawl through 
the submitted string and wrap the keys and values in double-quotes as necessary.

Usage:

```
var jsonEval = require('json-eval');
var jsObject = jsonEval(jsonLikeString);
```
