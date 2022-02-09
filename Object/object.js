/*
1.object literal :
    var mhs = {
    nama: 'Adam Nizam',
    umur: 22,
    nim : "TI17200001",
    ipks: [3.0, 3.25, 3.31],
    alamat: {
        desa: 'barebali',
        kota: 'praya',
        kabupaten: 'lombok tengah',
        provinsi: 'nusa tenggara barat',
    },
    };

2. function declaration : 
    function objectMhs(nama, nim, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    nim.nim = nim;
    mhs.jurusan = jurusan;
    return mhs;
    }
    var isiMhs = objectMhs('Adam Nizam', 'TI17200001', 'tehnik informatika');

3. constructor :
    function Mahasiswa(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    }
    var cetakMhs = new Mahasiswa('Adam Nizam', 'TI17200001', 'tehnik informatika');

 */
function Mahasiswa(nama, nim, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
}
var cetakMhs = new Mahasiswa('Adam Nizam', 'TI17200001', 'tehnik informatika');
