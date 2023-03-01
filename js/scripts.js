//Funcion adaptada del ejemplo de w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
function vermas (a, b) {
    var ocultable = document.getElementById(a);
  var btn = document.getElementById(i);
;

  if (a.style.display === "none") {
    a.style.display = "inline";
    btn.innerHTML = "ver mas"; 
  } else {
    a.style.display = "none";
    b.innerHTML = "Ver menos"; 
   ;
  }
} 
document.getElementById("boton1").onClick = vermas()