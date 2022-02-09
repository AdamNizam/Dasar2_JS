// membuat program sederhana
var penumpang = ['Zeen', undefined, 'Adoq'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return namaPenumpang;
  } else {
    // telusuri suluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tsb
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
        // jika ada penumpang yang namanya sama
      } else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahan
        console.log(namaPenumpang + ' Maaf penumpang sudah Ada');
        // kembalikan isi array dan keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikkan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong
    console.log('Angkot masih Kosong');
    // kembalikkan isi array dan keluar dari function
    return penumpang;
    // else
  } else {
    // telusuri seluruh kursi dari awal
    for (i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        // jika nama penumpang sesuai
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada nama yang sesuai
        // atampilkan pesan kesalahan
        console.log(namaPenumpang + ' tidak ada didalam Angkot');
        // kemabilkkan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};
