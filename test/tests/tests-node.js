'use strict';

const expect = require('chai').expect;

module.exports = function (jsonEval) {
  return function () {
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
      function ()
    {
      const jsonLike0 = '{a\\?: "a\\"",b-c  :"b:c"}';
      const jsonLike1 = "{a\\?: 'a\\'', b-c  :'b:c'}";
      const jsonLike2 = '{a\\?: "\\"a" ,b-c  :"b,c"}';
      const jsonLike3 = '{a\\?: ",:" ,b-c  :":,"}';

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"a?":"a\\"","b-c":"b:c"}');
      expect(JSON.stringify(json1)).to.equal('{"a?":"a\'","b-c":"b:c"}');
      expect(JSON.stringify(json2)).to.equal('{"a?":"\\"a","b-c":"b,c"}');
      expect(JSON.stringify(json3)).to.equal('{"a?":",:","b-c":":,"}');
    });

    it('should parse unwrapped keys, containing tildes, with different amounts of spacing', function () {
      const jsonLike0 = '{d~e:"d\\"~\\""}';
      const jsonLike1 = "{d~e: 'd\\'~\\''}";
      const jsonLike2 = '{d~e:  "\\"~\\"e"}';
      const jsonLike3 = '{d~e:   "d\\"~\\"e"}';

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"d~e":"d\\"~\\""}');
      expect(JSON.stringify(json1)).to.equal('{"d~e":"d\'~\'"}');
      expect(JSON.stringify(json2)).to.equal('{"d~e":"\\"~\\"e"}');
      expect(JSON.stringify(json3)).to.equal('{"d~e":"d\\"~\\"e"}');
    });

    it(
      'should parse multiple unwrapped keys, containing backslashes, minus signs and tildes, with different amounts of spacing',
      function ()
    {
      const jsonLike0 = '{a\\?:"\\",",  b-c: ",\\""  ,d~e: ",\\":"}';
      const jsonLike1 = "{a\\?:'\\',',  b-c: ',\\''  ,d~e: ',\\':'}";
      const jsonLike2 = '{a\\?:"\\":",  b-c: ":\\""  ,d~e: ":\\","}';
      const jsonLike3 = "{a\\?:'\\':',  b-c: ':\\''  ,d~e: ':\\','}";

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"a?":"\\",","b-c":",\\"","d~e":",\\":"}');
      expect(JSON.stringify(json1)).to.equal('{"a?":"\',","b-c":",\'","d~e":",\':"}');
      expect(JSON.stringify(json2)).to.equal('{"a?":"\\":","b-c":":\\"","d~e":":\\","}');
      expect(JSON.stringify(json3)).to.equal('{"a?":"\':","b-c":":\'","d~e":":\',"}');
    });

    it('should parse unwrapped keys, containing plus signs, with unwrapped values', function () {
      const jsonLike0 = '{f+g:true}';
      const jsonLike1 = '{f+g:0}';
      const jsonLike2 = '{f+g:6.6e+1}';
      const jsonLike3 = '{f+g:6.6e-1}';

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"f+g":true}');
      expect(JSON.stringify(json1)).to.equal('{"f+g":0}');
      expect(JSON.stringify(json2)).to.equal('{"f+g":66}');
      expect(JSON.stringify(json3)).to.equal('{"f+g":0.66}');
    });

    it(
      'should parse multiple wrapped and unwrapped keys, containing colons, backslashes and minus signs, with unwrapped values 1st in the list',
      function ()
    {
      const jsonLike0 = '{"f:g":true, a\\?:"\\",", b-c: ",\\""}';
      const jsonLike1 = "{'f:g':0, a\\?:'\\',', b-c: ',\\''}";
      const jsonLike2 = '{"f:g":6.6e+1, a\\?:"\\":", b-c: ":\\""}';
      const jsonLike3 = "{'f:g':6.6e-1, a\\?:'\\':', b-c: ':\\''}";

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"f:g":true,"a?":"\\",","b-c":",\\""}');
      expect(JSON.stringify(json1)).to.equal('{"f:g":0,"a?":"\',","b-c":",\'"}');
      expect(JSON.stringify(json2)).to.equal('{"f:g":66,"a?":"\\":","b-c":":\\""}');
      expect(JSON.stringify(json3)).to.equal('{"f:g":0.66,"a?":"\':","b-c":":\'"}');
    });

    it(
      'should parse multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values midway in the list',
      function ()
    {
      const jsonLike0 = '{a\\?:"\\",", "f:g":true, b-c: ",\\""}';
      const jsonLike1 = "{a\\?:'\\',', 'f:g':0, b-c: ',\\''}";
      const jsonLike2 = '{a\\?:"\\":", "f:g":6.6e+1, b-c: ":\\""}';
      const jsonLike3 = "{a\\?:'\\':', 'f:g':6.6e-1, b-c: ':\\''}";

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"a?":"\\",","f:g":true,"b-c":",\\""}');
      expect(JSON.stringify(json1)).to.equal('{"a?":"\',","f:g":0,"b-c":",\'"}');
      expect(JSON.stringify(json2)).to.equal('{"a?":"\\":","f:g":66,"b-c":":\\""}');
      expect(JSON.stringify(json3)).to.equal('{"a?":"\':","f:g":0.66,"b-c":":\'"}');
    });

    it(
      'should parse multiple wrapped and unwrapped keys, containing backslashes, colons and minus signs, with unwrapped values last in the list',
      function ()
    {
      const jsonLike0 = '{a\\?:"\\",", b-c: ",\\"", "f:g":true}';
      const jsonLike1 = "{a\\?:'\\',', b-c: ',\\'', 'f:g':0}";
      const jsonLike2 = '{a\\?:"\\":", b-c: ":\\"", "f:g":6.6e+1}';
      const jsonLike3 = "{a\\?:'\\':', b-c: ':\\'', 'f:g':6.6e-1}";

      const json0 = jsonEval(jsonLike0);
      const json1 = jsonEval(jsonLike1);
      const json2 = jsonEval(jsonLike2);
      const json3 = jsonEval(jsonLike3);

      expect(JSON.stringify(json0)).to.equal('{"a?":"\\",","b-c":",\\"","f:g":true}');
      expect(JSON.stringify(json1)).to.equal('{"a?":"\',","b-c":",\'","f:g":0}');
      expect(JSON.stringify(json2)).to.equal('{"a?":"\\":","b-c":":\\"","f:g":66}');
      expect(JSON.stringify(json3)).to.equal('{"a?":"\':","b-c":":\'","f:g":0.66}');
    });
  };
};
