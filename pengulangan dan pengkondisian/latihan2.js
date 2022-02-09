// membuat piramida
tes = '';
for (i1 = 9; i1 > 0; i1--) {
  for (i2 = 1; i2 <= i1; i2++) {
    tes += ' ';
  }
  for (i3 = 10; i3 > i1; i3--) {
    tes += '*';
  }
  for (i4 = 9; i4 > i1; i4--) {
    tes += '*';
  }
  tes += '\n';
}
for (a1 = 0; a1 <= 9; a1++) {
  for (a2 = 1; a2 <= a1; a2++) {
    tes += ' ';
  }
  for (a3 = 10; a3 > a1; a3--) {
    tes += '*';
  }
  for (a4 = 9; a4 > a1; a4--) {
    tes += '*';
  }
  tes += '\n';
}
console.log(tes);
