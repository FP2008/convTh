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

function convTh(e){
  //définir id comme une constante non modifiable
  //e = event de l'input
  id = e.target.id;
  valeur = e.target.value;
  testValue(valeur);
  
  if(id == "Th"){
    dc.value = valeur * 30;
    df.value = valeur * 30 * 1.8 + 32
  } else if(id == "dc"){
    Th.value = valeur / 30;
    df.value = valeur * 1.8 + 32;
    }
    else if(id == "df"){
      Th.value = (valeur - 32 ) / 1.8 / 30;
      dc.value = (valeur - 32 ) /1.8;
    }
    else if(id == "raz") {
      document.getElementById("myForm").reset();
      valeur = "";
    }
}
