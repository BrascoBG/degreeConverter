function degreeConverter([arg1]){
  celsius = parseFloat(arg1);
  fahrenheit = celsius * 9 / 5 + 32;
  console.log(celsius + ' degrees Celsius are equal to ' + fahrenheit.toFixed(2) + ' degrees Fahrenheit;')
}
degreeConverter([25]);
