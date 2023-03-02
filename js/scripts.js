//Funcion adaptada del ejemplo de w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
function verMasOMenos(ocult, btn) {
  var oculto = document.getElementById(ocult);
  var boton = document.getElementById(btn);

  if (mas.style.display === "none") {
    oculto.style.display = "inline";
    boton.textContent = "ver menos";
  } else {
    oculto.style.display = "none";
    boton.textContent = "ver más";
  }
}
