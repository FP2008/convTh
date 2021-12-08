/* f.poirrier */
document.getElementById("Th").addEventListener("input",convTh);
document.getElementById("dc").addEventListener("input",convTh);
document.getElementById("df").addEventListener("input",convTh);
document.getElementById("raz").addEventListener("click",convTh);

var id;
var valeur;

function testValue(value) {
  if (isNaN(value) == true){
    id = "raz";
  }
}

function round(value, step) {
  step || (step = 1.0);
  inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}

function convTh(e){
  //e = event de l'input
  id = e.target.id;
  valeur = parseFloat(e.target.value);
  testValue(valeur);
  
  if(id == "Th"){
    Th.value = valeur;
    dc.value = round(valeur * 30, 1.0);
    df.value = round(valeur * 30 * 1.8 + 32, 1.0);
  } else if(id == "dc"){
      Th.value = round(valeur / 30, 0.5);
      dc.value = valeur;
      df.value = round(valeur * 1.8 + 32, 1.0);
    }
    else if(id == "df"){
      Th.value = round((valeur - 32 ) / 1.8 / 30, 1.0);
      dc.value = round((valeur - 32 ) /1.8, 1.0);
      df.value = valeur;
    }
    else if(id == "raz") {
      document.getElementById("myForm").reset();
      valeur = "";
    }
}
