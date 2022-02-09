// function
/* 
Studi kasus:
saya mempuyai kubus a dan kubus b dengan nilai kubus a = delapan pangkat tiga dan kubus b = tiga pangkat empat.
buatlah program untuk  menghitung luas dari kubus a dan b ?
*/

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

/*
    cara pertama :

    volumeA = a * a * a;
    volumeB = b * b * b * b;
    total = volumeA + volumeB;
    alert('luas kubus A : ' + volumeA);
    alert('luas kubus B : ' + volumeB);
    alert('hasil :' + total);

*/

/*
    cara kedua menggunakan function :

    function menghitungLuasKubus(a, b) {
    var total;
    var volumeA = a * a * a;
    var volumeB = b * b * b * b;
    total = volumeA + volumeB;
    return total;
    }
    var hasil = menghitungLuasKubus;
    var KubusA = prompt('masukkan nilai kubus A :');
    var KubusB = prompt('masukkan nilai kubus B :');
    alert('hasil :' + hasil(KubusA, KubusB));
*/
// studi kasus kedua :
/*
sebuah perguruan tinggi sedang kesulitan untuk menghitung nilai mahasiswa nya ,
 buatlah program untuk menghitung nilai mahasiswa dikampus tersebut
*/
function menghitungNilai(absen, keaktifan, tugas, uts, uas) {
  var total;
  var kehadiran = absen;
  var nilaiKeaktifan = keaktifan;
  var nilaiTugas = tugas;
  var nilaiUts = uts;
  var nilaiUas = uas;
  total = (nilaiUas * keaktifan) / nilaiKeaktifan + nilaiUts + nilaiTugas - kehadiran;
  return total;
}
var hasil = menghitungNilai;
var namaMhs = prompt('masukkan nama mahasiswa : ');
var absensi = parseInt(prompt('masukkan jumlah kehadiran mahasiswa : '));
var keaktifanMahasiswaDiKelas = parseInt(prompt('masukkan nilai keaktifan mahasiswa saat bertanya  dikelas : '));
var nilaiUjianTengahSemester = parseInt(prompt('masukkan nilai hasil UTS mahasiswa : '));
var nilaiTugasMahasiswa = parseInt(prompt('masukkan nilai Seluruh tugas mahasiswa'));
var nilaiUjianAkhirSemester = parseInt(prompt('masukkan nilai UAS mahasiswa : '));
alert('nama mahasiswa : ' + namaMhs + '\n' + hasil(absensi, keaktifanMahasiswaDiKelas, nilaiTugasMahasiswa, nilaiUjianTengahSemester, nilaiUjianAkhirSemester));
