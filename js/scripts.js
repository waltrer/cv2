//Funcion adaptada del ejemplo de w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
function vermas () {
    var ocultable = document.getElementById("ocultable");
  var btn1 = document.getElementById("btn1");
  var textoboton1 = document.getElementById("textobtn1");

  if (ocultable.style.display === "none") {
    ocultable.style.display = "inline";
    btn1.innerHTML = "ver mas"; 
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver menos"; 
   ;
  }
} 
document.getElementById("boton1").onClick = vermas()