const addBtn = document.querySelectorAll(".add--product");
const inputPro = document.querySelectorAll(".number--product");
[...addBtn].forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    inputPro[index].value = parseInt(inputPro[index].value) + 1;
    console.log(inputPro[index].value);
  });
});
console.log(addBtn);
console.log(inputPro[0].value);
