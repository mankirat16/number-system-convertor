function convertTo(conversionType) {
  var numberInput = document.getElementById("number").value;
  var convertedNumber = "";
  switch (conversionType) {
    case "binary":
      convertedNumber = Number(numberInput).toString(2);
      break;
    case "decimal":
      convertedNumber = Number(numberInput).toString(10);
      break;
    case "octal":
      convertedNumber = Number(numberInput).toString(8);
      break;
    case "hexadecimal":
      convertedNumber = Number(numberInput).toString(16);
      break;
  }
  var resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = `${numberInput} to ${conversionType}: <strong>${convertedNumber}</strong>`;
}
