var tanya = true;
while (tanya == true) {
  // membuat game SUWIT
  var namaHewan = prompt('Silahkan Pilih Status Anda Saat Ini: \n Gajah , Monyet , Kancil , Buaya , Singa');
  // bilanggan Random
  // Math.random(); adalah sebuah Library bawaan JavaScript
  var comp = Math.random();
  if (comp < 0.15) {
    comp = 'monyet';
  } else if (comp >= 0.15 && comp < 0.3) {
    comp = 'kancil';
  } else if (comp >= 0.3 && comp < 0.5) {
    comp = 'gajah';
  } else if (comp >= 0.5 && comp < 0.7) {
    comp = 'buaya';
  } else {
    comp = 'singa';
  }

  var hasil = '';
  if (namaHewan == comp) {
    hasil = 'SERI!!';
  } else if (namaHewan == 'monyet') {
    hasil = comp == 'kancil' ? 'Anda Kalah !' : 'Anda menang';
  } else if (namaHewan == 'kancil') {
    hasil = comp == 'gajah' ? 'Anda Kalah !' : 'Anda Menang';
  } else if (namaHewan == 'gajah') {
    hasil = comp == 'buaya' ? 'Anda Menang !' : 'Anda Kalah';
  } else if (namaHewan == 'buaya') {
    hasil = comp == 'singa' ? 'Anda Menang !' : 'Anda Kalah';
  } else if (namaHewan == 'singa') {
    hasil = comp == 'buaya' ? 'Anda Menang !' : 'Anda kalah';
  } else {
    hasil = 'Yang Anda Masukkan salah';
  }
  alert('Anda Memilih : ' + namaHewan + ' Versus ' + comp + ' \n Hasilnya Adalah : ' + hasil);

  tanya = confirm('Coba Lagi !!!');
}
alert('Trimakasih Telah bermain? \n jangan Lupa Bahagia');
