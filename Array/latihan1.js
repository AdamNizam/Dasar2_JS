// Array bertipe object
// jumlah index dan element pada array itu berbeda
// Example
//   var binatang = ['kelinci', 'buaya', 'singan', 'harimau', 'kancil', 'monyet'];
//    console.log(binatang.length);

// array di javascripct bisa menyimpan function dan multidimensi / bersarang
// Example menggunakan function exspression :

var myFunction = function () {
  alert('hello wolrd!');
};
var myArray = ['teks', 10, false, myFunction, [1, 2, 3, 4, 5]];
console.log(myArray[4][4]);
