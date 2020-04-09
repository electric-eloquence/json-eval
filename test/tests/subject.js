/* eslint-disable strict */

var subject = [
  // parses unwrapped keys, containing backslashes
  '{a\\?:"\\""}',
  "{a\\?:'\\''}",
  '{a\\?:","}',
  '{a\\?:":"}',
  // parses unwrapped keys, containing minus signs
  '{b-c :"b:"}',
  "{b-c :':c'}",
  '{b-c :"b,"}',
  "{b-c :',c'}",
  // parses multiple unwrapped keys, containing backslashes and minus signs, with different amounts of spacing
  '{a\\?: "a\\"",b-c  :"b:c"}',
  "{a\\?: 'a\\'', b-c  :'b:c'}",
  '{a\\?: "\\"a" ,b-c  :"b,c"}',
  '{a\\?: ",:" ,b-c  :":,"}',
  // parses unwrapped keys, containing tildes, with different amounts of spacing
  '{d~e:  "d\\"~\\""}',
  "{d~e:  'd\\'~\\''}",
  '{d~e:  "\\"~\\"e"}',
  '{d~e:  "d\\"~\\"e"}',
  // parses multiple unwrapped keys, containing backslashes, minus signs and tildes, with different amounts of spacing
  '{a\\?:"\\",",  b-c: ",\\""  ,d~e: ",\\":"}',
  "{a\\?:'\\',',  b-c: ',\\''  ,d~e: ',\\':'}",
  '{a\\?:"\\":",  b-c: ":\\""  ,d~e: ":\\","}',
  "{a\\?:'\\':',  b-c: ':\\''  ,d~e: ':\\','}",
  // parses unwrapped keys, containing plus signs, with unwrapped values
  '{f+g:true}',
  '{f+g:0}',
  '{f+g:6.6e+1}',
  '{f+g:6.6e-1}',
  // parses multiple wrapped and unwrapped keys, containing colons, backslashes and minus signs, with unwrapped values
  // 1st in the list
  '{"f:g":true, a\\?:"\\",", b-c: ",\\""}',
  "{'f:g':0, a\\?:'\\',', b-c: ',\\''}",
  '{"f:g":6.6e+1, a\\?:"\\":", b-c: ":\\""}',
  "{'f:g':6.6e-1, a\\?:'\\':', b-c: ':\\''}",
  // parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values
  // midway in the list
  '{a\\?:"\\",", "f:g":true, b-c: ",\\""}',
  "{a\\?:'\\',', 'f:g':0, b-c: ',\\''}",
  '{a\\?:"\\":", "f:g":6.6e+1, b-c: ":\\""}',
  "{a\\?:'\\':', 'f:g':6.6e-1, b-c: ':\\''}",
  // parses multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values
  // last in the list
  '{a\\?:"\\",", b-c: ",\\"", "f:g":true}',
  "{a\\?:'\\',', b-c: ',\\'', 'f:g':0}",
  '{a\\?:"\\":", b-c: ":\\"", "f:g":6.6e+1}',
  "{a\\?:'\\':', b-c: ':\\'', 'f:g':6.6e-1}"
];

if (typeof global === 'object' && typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = subject;
}
else if (typeof window === 'object') {
  window.subject = subject;
}
