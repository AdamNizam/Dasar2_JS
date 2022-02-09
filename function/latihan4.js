/*
 ketika terjadi nilai yang dikirimkan oleh argument ke parameter itu kurang maka parameter yang tidak ada argumentnya akan menjadi UNDEFINED
    
    
    arguments = adalah sebuah variabel khusus atau array yang berisi nilai yang dikirimkan saat fungsi dipanggil
    atau sering disebut sudo/semu variabel


 */
// // Example
// function tambah() {
//   return arguments;
// }
// var coba = tambah(5, 10, 20, 'hey', false);
// console.log(coba);


function tambah() {
  hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var cetak = tambah(7,9,2, 2);
console.log(cetak);
