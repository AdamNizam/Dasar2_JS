function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayarAngkot) {
    if (this.penumpang.lenght === 0) {
      console.log('angkot masih kosong');
      return false;
    }
    for (var i = 0; i < this.penumpang.lenght; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayarAngkot;
        return this.penumpang;
      }
    }
  };
}
var angkot1 = new Angkot('Zeen', ['mantang', 'praya'], [], 0);
var angkot2 = new Angkot('Gilang', ['mantang', 'kopang'], [], 0);
