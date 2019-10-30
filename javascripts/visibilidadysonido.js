/* funciones para mostrar/ocultar y sonar/parar */

function show(element){
    document.getElementById(element).style.visibility="visible";
 }
 function hide(element){
    document.getElementById(element).style.visibility="hidden";
 }
 function sonar(musica){
   var audio = document.getElementById(musica);
   audio.play();
 }
 function parar(musica){
   var audio = document.getElementById(musica);
   audio.pause();
 }