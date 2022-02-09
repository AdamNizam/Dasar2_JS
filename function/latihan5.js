// global scope / window scope

// variabel a yang ada di dalam function itu berbeda dengan  variabel a yang ada diluar function

var a = 1;
function tes(a) {
  // fungsi window adalah untuk memanggil variabel yang ada diluar function
  // console.log(window.a);
  console.log(a);
}
tes(a);
console.log(a);
