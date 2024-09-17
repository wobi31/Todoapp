// background
const merah = document.getElementById("btn1");
const kuning = document.getElementById("btn2");
const hijau = document.getElementById("btn3");
const biru = document.getElementById("btn4");
const putih = document.getElementById("btn5");
const hitam = document.getElementById("btn6");

merah.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
  localStorage.setItem("backgroundColor", "red");
  alert("background anda,akan berubah menjadi merah");
});
kuning.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
  localStorage.setItem("backgroundColor", "yellow");
  alert("background anda,akan berubah menjadi kuning");
});
hijau.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  localStorage.setItem("backgroundColor", "green");
  alert("background anda,akan berubah menjadi hijau");
});
biru.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  localStorage.setItem("backgroundColor", "blue");
  alert("background anda,akan berubah menjadi biru");
});
putih.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  localStorage.setItem("backgroundColor", "white");
  alert("background anda,akan berubah menjadi putih");
});
hitam.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  localStorage.setItem("backgroundColor", "black");
  alert("backgorund anda,akan berubah menjadi hitam");
});

// menyimpan backgroundColor menggunkan localStorage di applikasian dengan window.onload kemudian di simpan dengan save color
window.onload = () => {
  const savedColor = localStorage.getItem("backgroundColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
};
