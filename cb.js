//contoh program pemanggilan fucntion biasa
//function tegur(nama) => { //buat fucntion tegur nama function nama adalah parameter
//  console.log(`halo, ${nama}`) //cetak dengan console.log tambahkan kata yang ingin di masukan dan panggila data yg sudah di inputkan
//}
//
//tegur("riki"); //data berupa string berisikan nama lalu di panggial dengan pemerosesan fucntion

//function memasak(baha1, bahan2) { //funsgi pertam auntuk proses penambhan adonan
//  let adonan = baha1 + bahan2;
//  let kue = panggang(adonan);
//  return kue;
//}
//
//function panggang(adonan) { //fungsi kedua untuk tahap kedua atau proses kedua
//  return "kue" + adonan
//}
//let bikinKue = memasak('telur', 'sapi');
//console.log(bikinKue);



//let bikinkue = function(bahan1, bahan2) {
//  return bahan1 + bahan2;
//};
//
//let sudahMatang = bikinKue(4, 7);
//console.log(sudahMatang);
function pertambhan(angka1, angka2) {
  return angka1 * angka2;
}

let hasil = pertambhan(4, 6)
console.log(hasil);

function bikinKopi(jenisKopi) {
  return `kopi ${jenisKopi} tinggal di minum`;
}

let sayaPesan = bikinKopi("mocca");
console.log(sayaPesan);

//setTimeout(function() {
//  console.log('waktu berakhir');
//}, 1000);

//function menyapa(() {
//  setTimeout(() {
//    console.log("dengan waktu", menyapa)
//  ), 1000}
//});
//
//menyapa();

function bikinGorengan(sudahMenggoreng) {
  console.log("gorengan sedang digoreng");
sudahMenggoreng();
}
function sudahMenggoreng() {
  console.log("gorengan sudah matang")
}

bikinGorengan(sudahMenggoreng);
