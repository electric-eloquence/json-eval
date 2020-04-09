/* eslint-disable strict */

var main = document.getElementById('main');

window.subject.forEach(function (s, i) {
  var contentParagraph = document.createElement('p');
  contentParagraph.className = 'assertion-' + i;
  contentParagraph.innerHTML = JSON.stringify(window.jsonEval(s));
  main.appendChild(contentParagraph);
});
