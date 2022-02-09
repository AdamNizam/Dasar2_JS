function tambah(a, b) {
  return a + b;
}
function kali(a, b) {
  return a * b;
}
function bagi(a, b) {
  return a / b;
}
function kurang(a, b) {
  return a - b;
}
function sisaBagi(a, b) {
  return a % b;
}
var hasil = tambah(kali(2, 5), sisaBagi(34, 3));
console.log(hasil);
