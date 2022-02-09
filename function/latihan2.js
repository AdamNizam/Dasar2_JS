var namaMhs = prompt('masukkan nama mahasiswa : ');
var nimMhs = prompt('masukkan nim mahasiswa : ');
var absensi = parseInt(prompt('masukkan jumlah kehadiran mahasiswa : '));
var keaktifan = parseInt(prompt('masukkan nilai keaktifan mahasiswa saat bertanya  dikelas : '));
var nilaiUts = parseInt(prompt('masukkan nilai hasil UTS mahasiswa : '));
var nilaiTugas = parseInt(prompt('masukkan nilai Seluruh tugas mahasiswa'));
var nilaiUas = parseInt(prompt('masukkan nilai UAS mahasiswa : '));
var total = (nilaiTugas / nilaiUts) * keaktifan + nilaiUas - absensi;
if (total > 95) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade A+' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 90) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade A' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 85) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade A-' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 80) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade B+' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 75) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade B' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 70) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade B-' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 65) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade C+' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 60) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade C' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 55) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade C-' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 50) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade D+' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 54) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade D' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else if (total > 40) {
  alert('Nilai Anda : ' + total + '\n' + 'Grade D-' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs);
} else {
  alert('Nilai Anda : ' + total + '\n' + 'Grade E' + '\n' + 'nama Anda : ' + namaMhs + '\n' + 'Nim Anda :' + nimMhs + '\n' + 'Hanya Karna Itu Sulit...... Bukan Berarti Tidak Mungkin \n Trust Me..\n You Can Do It');
}
