// membuat segitiga siku2
var example = '';
for (var i = 10; i > 0; i--) {
  for (var e = 10; e > 0; e--) {
    if (e > i) {
      example += '  ';
    } else {
      example += '* ';
    }
  }
  example += '\n';
}
console.log(example);
