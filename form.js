const form = document.querySelector("form");
const textInput = document.getElementById("text");
const dateInput = document.getElementById("date");
const submitBtn = document.getElementById("submit");
const tableBody = document.getElementById("table-body");
let number = 1;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); //default behavior dari tombol submit

  // mengambil input teks
  const textValue = textInput.value;
  const dateValue = dateInput.value;

  if (textValue.trim() === "" || dateValue.trim() === "") {
    alert("Semua input wajib di isi");
    return;
  }
  const newRow = document.createElement("tr");

  const cells = [
    document.createElement("td"), // id
    document.createElement("td"), // text todo
    document.createElement("td"), // date 
    document.createElement("td"), // action 
  ];
  
  // ke colom
  cells[0].textContent = number++; 
  cells[1].textContent = textValue; 
  cells[2].textContent = dateValue;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    textInput.value = cells[1].textContent; //mengisi nilai yang sudah di edit
    textInput.focus();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    newRow.remove();
  };

  cells[3].appendChild(editBtn);
  cells[3].appendChild(deleteBtn);

  // menambahkan seluruh kolom pada baris
  cells.forEach((cell) => newRow.appendChild(cell));

  tableBody.appendChild(newRow);

  form.reset();
});
