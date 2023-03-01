//Funcion adaptada del ejemplo de w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
function verMasOMenos() {
    var oculto = document.getElementById("mas");
    var boton = document.getElementById("btn1");

    if (mas.style.display === "none") {
      oculto.style.display = "inline";
      boton.textContent = "ver menos";
    } else {
      oculto.style.display = "none";
      boton.textContent = "ver mas";
    }
  }