var jmlangkot = 20;
var angkotBeroprasi = 5;
var angkotSedangLembur = 10;
var angkotRusak = 15;
var noAngkot = 1;
for (var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi) {
    console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
  } else if (noAngkot <= angkotSedangLembur) {
    console.log('Angkot No.' + noAngkot + ' sedang lembur');
  } else if (noAngkot <= angkotRusak) {
    console.log('Angkot No. ' + noAngkot + ' sedang dalam perbaikan');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
  }
}
