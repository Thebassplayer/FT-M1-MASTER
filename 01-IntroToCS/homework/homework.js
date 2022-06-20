'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numDecimal = 0;
  for(var i = 0; i< num.length; i++ ){
    numDecimal += +num[i] *2 ** (num.length-1-i);
  }
  return numDecimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let numBinario = num.toString(2)
  return numBinario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}