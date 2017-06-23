var result = window.prompt();
var csvArray=result.split(/\r\n|\n/);
var secondArr;
console.log(csvArray);

function twoDArray(element,index,array) {
  var str=element;
  var count=0;
  secondArr[count] = str.split(",");
  console.log(secondArr[count]);
}
csvArray.forEach(twoDArray);
console.log(secondArr);
