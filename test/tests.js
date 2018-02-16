/* eslint-disable quotes */

'use strict';

const expect = require('chai').expect;

const jsonEval = require('../src/index');

describe('json-eval', function () {
  it('should parse unwrapped keys, containing backslashes', function () {
    const jsonLike0 = '{a\\?:"\\""}';
    const jsonLike1 = "{a\\?:'\\''}";
    const jsonLike2 = '{a\\?:","}';
    const jsonLike3 = '{a\\?:":"}';

    const json0 = jsonEval(jsonLike0);
    const json1 = jsonEval(jsonLike1);
    const json2 = jsonEval(jsonLike2);
    const json3 = jsonEval(jsonLike3);

    expect(JSON.stringify(json0)).to.equal('{"a?":"\\""}');
    expect(JSON.stringify(json1)).to.equal('{"a?":"\'"}');
    expect(JSON.stringify(json2)).to.equal('{"a?":","}');
    expect(JSON.stringify(json3)).to.equal('{"a?":":"}');
  });

  it('should parse unwrapped keys, containing minus signs', function () {
    const jsonLike0 = '{b-c :"b:"}';
    const jsonLike1 = "{b-c :':c'}";
    const jsonLike2 = '{b-c :"b,"}';
    const jsonLike3 = "{b-c :',c'}";

    const json0 = jsonEval(jsonLike0);
    const json1 = jsonEval(jsonLike1);
    const json2 = jsonEval(jsonLike2);
    const json3 = jsonEval(jsonLike3);

    expect(JSON.stringify(json0)).to.equal('{"b-c":"b:"}');
    expect(JSON.stringify(json1)).to.equal('{"b-c":":c"}');
    expect(JSON.stringify(json2)).to.equal('{"b-c":"b,"}');
    expect(JSON.stringify(json3)).to.equal('{"b-c":",c"}');
  });

  it(
    'should parse multiple unwrapped keys, containing backslashes and minus signs, with different amounts of spacing',
    function () {
    }
  );
});
    /*
  switch (jsonLikeStr) {
    case '{a\\?: "a\\"",b-c  :"b:c"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"a\\"","b-c":"b:c"}</span>\'<br>';
      break;
    case "{a\\?: 'a\\'', b-c  :'b:c'}":
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"a\'","b-c":"b:c"}</span>\'<br>';
      break;
    case '{a\\?: "\\"a" ,b-c  :"b,c"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\"a","b-c":"b,c"}</span>\'<br>';
      break;
    case '{a\\?: ",:" ,b-c  :":,"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":",:","b-c":":,"}</span>\'<br>';
      break;
    case '{d~e:  "d\\"~\\""}':
      contentParagraph.innerHTML += '\'<span class="expect">{"d~e":"d\\"~\\""}</span>\'<br>';
      break;
    case "{d~e:  'd\\'~\\''}" :
      contentParagraph.innerHTML += '\'<span class="expect">{"d~e":"d\'~\'"}</span>\'<br>';
      break;
    case '{d~e:  "\\"~\\"e"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"d~e":"\\"~\\"e"}</span>\'<br>';
      break;
    case '{d~e:  "d\\"~\\"e"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"d~e":"d\\"~\\"e"}</span>\'<br>';
      break;
    case '{a\\?:"\\",",  b-c: ",\\""  ,d~e: ",\\":"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\",","b-c":",\\"","d~e":",\\":"}</span>\'<br>';
      break;
    case "{a\\?:'\\',',  b-c: ',\\''  ,d~e: ',\\':'}" :
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\',","b-c":",\'","d~e":",\':"}</span>\'<br>';
      break;
    case '{a\\?:"\\":",  b-c: ":\\""  ,d~e: ":\\","}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\":","b-c":":\\"","d~e":":\\","}</span>\'<br>';
      break;
    case "{a\\?:'\\':',  b-c: ':\\''  ,d~e: ':\\','}":
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\':","b-c":":\'","d~e":":\',"}</span>\'<br>';
      break;
    case '{f+g:true}':
      contentParagraph.innerHTML += '\'<span class="expect">{"f+g":true}</span>\'<br>';
      break;
    case '{f+g:0}':
      contentParagraph.innerHTML += '\'<span class="expect">{"f+g":0}</span>\'<br>';
      break;
    case '{f+g:6.6e+1}':
      contentParagraph.innerHTML += '\'<span class="expect">{"f+g":66}</span>\'<br>';
      break;
    case '{f+g:6.6e-1}':
      contentParagraph.innerHTML += '\'<span class="expect">{"f+g":0.66}</span>\'<br>';
      break;
    case '{"f:g":true, a\\?:"\\",", b-c: ",\\""}':
      contentParagraph.innerHTML += '\'<span class="expect">{"f:g":true,"a?":"\\",","b-c":",\\""}</span>\'<br>';
      break;
    case "{'f:g':0, a\\?:'\\',', b-c: ',\\''}" :
      contentParagraph.innerHTML += '\'<span class="expect">{"f:g":0,"a?":"\',","b-c":",\'"}</span>\'<br>';
      break;
    case '{"f:g":6.6e+1, a\\?:"\\":", b-c: ":\\""}':
      contentParagraph.innerHTML += '\'<span class="expect">{"f:g":66,"a?":"\\":","b-c":":\\""}</span>\'<br>';
      break;
    case "{'f:g':6.6e-1, a\\?:'\\':', b-c: ':\\''}":
      contentParagraph.innerHTML += '\'<span class="expect">{"f:g":0.66,"a?":"\':","b-c":":\'"}</span>\'<br>';
      break;
    case '{a\\?:"\\",", "f:g":true, b-c: ",\\""}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\",","f:g":true,"b-c":",\\""}</span>\'<br>';
      break;
    case "{a\\?:'\\',', 'f:g':0, b-c: ',\\''}" :
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\',","f:g":0,"b-c":",\'"}</span>\'<br>';
      break;
    case '{a\\?:"\\":", "f:g":6.6e+1, b-c: ":\\""}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\":","f:g":66,"b-c":":\\""}</span>\'<br>';
      break;
    case "{a\\?:'\\':', 'f:g':6.6e-1, b-c: ':\\''}":
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\':","f:g":0.66,"b-c":":\'"}</span>\'<br>';
      break;
    case '{a\\?:"\\",", b-c: ",\\"", "f:g":true}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\",","b-c":",\\"","f:g":true}</span>\'<br>';
      break;
    case "{a\\?:'\\',', b-c: ',\\'', 'f:g':0}" :
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\',","b-c":",\'","f:g":0}</span>\'<br>';
      break;
    case '{a\\?:"\\":", b-c: ":\\"", "f:g":6.6e+1}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\":","b-c":":\\"","f:g":66}</span>\'<br>';
      break;
    case "{a\\?:'\\':', b-c: ':\\'', 'f:g':6.6e-1}":
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\':","b-c":":\'","f:g":0.66}</span>\'<br>';
      break;
  }

  var jsonEvald = jsonEval(jsonLikeStr);

  contentParagraph.innerHTML += 'actually equals \'<span class="actual">' + JSON.stringify(jsonEvald) + '</span>\'';
  main.appendChild(contentParagraph);
});

var assertions = document.querySelectorAll('.assert');
Array.prototype.filter.call(assertions, function (assertion) {
  var expect = assertion.querySelector('.expect');
  var actual = assertion.querySelector('.actual');

  if (expect.innerHTML === actual.innerHTML) {
    expect.setAttribute('style', 'color: #0a0;');
    actual.setAttribute('style', 'color: #0a0;');
  }
  else {
    expect.setAttribute('style', 'color: #f00;');
    actual.setAttribute('style', 'color: #f00;');
  }
});
*/
