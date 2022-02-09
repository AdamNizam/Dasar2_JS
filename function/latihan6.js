/*
    REKURSIF
    adalah sebuah fungsi yang memanggil dirinya sendiri

    Base Case (kondisi berhenti)
    kondisi akhir dari REKURSIF yang menghasilkan sebuah nilai



*/
// Example :
/*
    function tampilAngka(n) {
        // Base Case
    if (n === 0) {
        return;
    }
    console.log(n);
    tampilAngka(n - 1);
    }
    tampilAngka(10);
*/

// faktorial
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
var angka = parseInt(prompt('masukkan angka'));
console.log(faktorial(angka));

/*
faktorial(5)
5 * faktorial (4)
5 * (4 * faktorial (3))
5 * (4 * 3 faktorial (2))
5 *  (4 * 2 faktorial (1))
maka akan dijumlahkan
5 * (4 * (3 * (2 * (1)))
5 * (4 * (3 * (2)))
5 * (4 * (3))
5 * (4 * 6)
5 * 24
maka hasilnya = 120

*/
