let select = document.getElementsByTagName("select")[0];
let input = document.getElementsByClassName("input")[0];
let btn = document.getElementsByTagName("button")[0];
let resultDivOne = document.getElementsByClassName("one")[0];
let resultDivTwo = document.getElementsByClassName("two")[0];
let resultDivThree = document.getElementsByClassName("three")[0];

window.onload = function () {
  input.value = "";
};

btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please,Inter Number To Convert It");
  } else {
    resultDivOne.style.display = "block";
    resultDivTwo.style.display = "block";
    resultDivThree.style.display = "block";

    let binaryValue = `Binary : ${parseInt(input.value).toString(2)}`;
    let octalValue = `Octal : ${parseInt(input.value).toString(8)}`;
    let decimalValue = `Decimal : ${parseInt(input.value).toString(10)}`;
    let hexaValue = `Hexadecimal : ${parseInt(input.value).toString(16)}`;

    if (select.value === "decimal") {
      resultDivOne.textContent = binaryValue;
      resultDivTwo.textContent = octalValue;
      resultDivThree.textContent = hexaValue;
    } else if (select.value === "binary") {
      resultDivOne.textContent = octalValue;
      resultDivTwo.textContent = decimalValue;
      resultDivThree.textContent = hexaValue;
    } else if (select.value === "octal") {
      resultDivOne.textContent = binaryValue;
      resultDivTwo.textContent = decimalValue;
      resultDivThree.textContent = hexaValue;
    } else if (select.value === "hexadecimal") {
      let hexToDecimal = parseInt(input.value, 16);
      resultDivOne.textContent = `Binary : ${hexToDecimal.toString(2)}`;
      resultDivTwo.textContent = `Octal : ${hexToDecimal.toString(8)}`;
      resultDivThree.textContent = `Decimal : ${hexToDecimal}`;
    }
  }
});
