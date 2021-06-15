//JavaScript
//Función que encurntra el superdígito de un número
function superDigit(P) {
    if (P < 10) {
      return P
    }  
    return superDigit(P % 10 + superDigit(parseInt(P / 10)));
  }
  
  numero= 148
  n=3
  nString= numero.toString();
  P=(nString.repeat(n));
  console.log(superDigit(P));