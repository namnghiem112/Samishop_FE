// js về thanh toán
var price = document.querySelectorAll(".price");
var number_product = document.querySelectorAll(".number--product");
var pay = document.querySelector(".pay");

function chuyendoi(s) {
  s = s.replace(",", ".");
  s = parseFloat(s);
  return s;
}

function chuyendoi2(priceList) {
  var a = Array.from(priceList).map(function (element) {
    var priceText = element.innerText.split(" ")[0].trim();
    return chuyendoi(priceText);
  });
  return a;
}
var a = chuyendoi2(price);
var b = Array.from(number_product);
var n = a.length;
var sum = 0;
for (let i = 0; i < n; i++) {
  sum += a[i] * b[i].value;
  console.log(a[i]);
}
const addBtn = document.querySelectorAll(".add--product");
const inputPro = document.querySelectorAll(".number--product");
const subBtn = document.querySelectorAll(".sub--product");
[...addBtn].forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    inputPro[index].value = parseInt(inputPro[index].value) + 1;
    console.log(inputPro[index].value);
    sum = 0;
    for (let i = 0; i < n; i++) {
      sum += a[i] * b[i].value;
      console.log(a[i]);
    }
    pay.innerHTML =
      sum.toLocaleString("vi-VN", { minimumFractionDigits: 3 }) + " VNĐ";
  });
});
[...subBtn].forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    inputPro[index].value = parseInt(inputPro[index].value) - 1;
    console.log(inputPro[index].value);
    sum = 0;
    for (let i = 0; i < n; i++) {
      sum += a[i] * b[i].value;
      console.log(a[i]);
    }
    if (parseInt(inputPro[index].value) > 0)
      pay.innerHTML =
        sum.toLocaleString("vi-VN", { minimumFractionDigits: 3 }) + " VNĐ";
  });
});
pay.innerHTML =
  sum.toLocaleString("vi-VN", { minimumFractionDigits: 3 }) + " VNĐ";
console.log(sum);
