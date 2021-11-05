document.getElementById("Th").addEventListener("input",convTh);

function convTh(e){
    //définir id comme une constante non modifiable
  //e = event de l'input
  const id = e.target.id;
  const valeur = parseFloat(e.target.value);
  dc.value = valeur * 30;
  df.value = valeur * 30 * 1.8 + 32
 }