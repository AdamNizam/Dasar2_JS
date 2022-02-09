// cara menuliskan alert
// alert('hello world!');

// cara menuliskan prompt
//prompt('masukkan nama anda');

// var namaAnda = prompt('masukkan nama anda :');
// alert('nama anda adalah :' + namaAnda);

// cara menuliskan confirm
// confirm('apakah anda yakin');

// confirm menghasilkan nilai boolean
// var latihan = confirm('are you sure !');
// alert(latihan);

// menggunakan pengkondisian
var latihanConfirm = confirm('silahkan pilih tombol Ok atau CANCEL');
if (latihanConfirm === true) {
  alert('Success');
} else {
  alert('failed');
}
