/*
 while (kondisi) {
    aksi
 }
*/
// hati2 saat menggunakan while bisa terjadi ifinite loop atau looping forever
// contoh infinite loop :
// while (true) {
//   console.log('hello wolrd!');
// }
var nilaiAwal = 1;
while (nilaiAwal <= 5) {
  console.log('hello world! ' + nilaiAwal + ' kali');
  nilaiAwal++;
}
