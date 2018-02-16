var i = 0;
var jsonLikeStrings = [
  '{a\\?:"\\""}',
  "{a\\?:'\\''}",
  '{a\\?:","}',
  '{a\\?:":"}',
  '{b-c :"b:"}',
  "{b-c :':c'}",
  '{b-c :"b,"}',
  "{b-c :',c'}",
  '{a\\?: "a\\"",b-c  :"b:c"}',
  "{a\\?: 'a\\'', b-c  :'b:c'}",
  '{a\\?: "\\"a" ,b-c  :"b,c"}',
  '{a\\?: ",:" ,b-c  :":,"}',
  '{d~e:  "d\\"~\\""}',
  "{d~e:  'd\\'~\\''}" ,
  '{d~e:  "\\"~\\"e"}',
  '{d~e:  "d\\"~\\"e"}',
  '{a\\?:"\\",",  b-c: ",\\""  ,d~e: ",\\":"}',
  "{a\\?:'\\',',  b-c: ',\\''  ,d~e: ',\\':'}" ,
  '{a\\?:"\\":",  b-c: ":\\""  ,d~e: ":\\","}',
  "{a\\?:'\\':',  b-c: ':\\''  ,d~e: ':\\','}",
  '{f+g:true}',
  '{f+g:0}',
  '{f+g:6.6e+1}',
  '{f+g:6.6e-1}',
  '{"f:g":true, a\\?:"\\",", b-c: ",\\""}',
  "{'f:g':0, a\\?:'\\',', b-c: ',\\''}" ,
  '{"f:g":6.6e+1, a\\?:"\\":", b-c: ":\\""}',
  "{'f:g':6.6e-1, a\\?:'\\':', b-c: ':\\''}",
  '{a\\?:"\\",", "f:g":true, b-c: ",\\""}',
  "{a\\?:'\\',', 'f:g':0, b-c: ',\\''}" ,
  '{a\\?:"\\":", "f:g":6.6e+1, b-c: ":\\""}',
  "{a\\?:'\\':', 'f:g':6.6e-1, b-c: ':\\''}",
  '{a\\?:"\\",", b-c: ",\\"", "f:g":true}',
  "{a\\?:'\\',', b-c: ',\\'', 'f:g':0}" ,
  '{a\\?:"\\":", b-c: ":\\"", "f:g":6.6e+1}',
  "{a\\?:'\\':', b-c: ':\\'', 'f:g':6.6e-1}"
];
var main = document.getElementById('main');

jsonLikeStrings.forEach(function (jsonLikeStr) {
  var contentParagraph = document.createElement('p');
  contentParagraph.className = 'assert';
  contentParagraph.innerHTML = ++i + '. ' + jsonLikeStr + ':<br>';
  contentParagraph.innerHTML += 'expect to equal ';

  switch (jsonLikeStr) {
    case '{a\\?:"\\""}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\\""}</span>\'<br>';
      break;
    case "{a\\?:'\\''}":
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":"\'"}</span>\'<br>';
      break;
    case '{a\\?:","}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":","}</span>\'<br>';
      break;
    case '{a\\?:":"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"a?":":"}</span>\'<br>';
      break;
    case '{b-c :"b:"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"b-c":"b:"}</span>\'<br>';
      break;
    case "{b-c :':c'}":
      contentParagraph.innerHTML += '\'<span class="expect">{"b-c":":c"}</span>\'<br>';
      break;
    case '{b-c :"b,"}':
      contentParagraph.innerHTML += '\'<span class="expect">{"b-c":"b,"}</span>\'<br>';
      break;
    case "{b-c :',c'}":
      contentParagraph.innerHTML += '\'<span class="expect">{"b-c":",c"}</span>\'<br>';
      break;
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
