document.getElementById("Th").addEventListener("input",convTh);
document.getElementById("dc").addEventListener("input",convTh);
document.getElementById("df").addEventListener("input",convTh);

function convTh(e){
    //définir id comme une constante non modifiable
  //e = event de l'input
  const id = e.target.id;
  const valeur = parseFloat(e.target.value);
  if(valeur === NaN)return;
  if(id == "Th"){
    dc.value = valeur * 30;
    df.value = valeur * 30 * 1.8 + 32
  }
  else if(id == "dc"){
    Th.value = valeur / 30;
    df.value = valeur * 1.8 + 32;
  }
  else if(id == "df"){
    Th.value = (valeur - 32 ) / 1.8 / 30;
    dc.value = (valeur - 32 ) /1.8;
  }
}
