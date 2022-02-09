var namaMakanan = prompt('masukkan nama makanan & minuman : \n (Exampale : , Nasi , Daging , Susu , Hotdog , Hamburger');
switch (namaMakanan) {
  case 'nasi':
    alert('makanan ini sehat ');
    break;
  case 'daging':
    alert('makanan ini sehat ');
    break;
  case 'susu':
    alert('minuman  ini sehat ');
    break;
  case 'hotdog':
    alert('makanan ini tidak sehat ');
    break;
  case 'hamburger':
    alert('makanan ini tidak sehat ');
    break;
  default:
    alert('Yang anda masukkan tidak ada di daftar menu');
    break;
}
