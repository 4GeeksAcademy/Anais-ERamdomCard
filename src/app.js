import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generarCarta()
  document.getElementById("boton").addEventListener("click", generarCarta)
};

function generarCarta(){
  let numeros=[2,3,4,5,6,7,8,9,10,"A","J","Q","K"]
  let numeroRandom =numeros[Math.floor(Math.random() * numeros.length)]
  console.log(numeroRandom)
  let palos=[ "♦", "♥", "♠","♣"]
  let paloRandom =palos[Math.floor(Math.random() * palos.length)]
  console.log(paloRandom)
  document.getElementById("palo").innerHTML=paloRandom
  document.getElementById("numero").innerHTML=numeroRandom
  document.getElementById("simbolo").innerHTML=paloRandom
  if (paloRandom=="♥"||paloRandom=="♦"){
    document.getElementById("palo").style.color="red"
    document.getElementById("simbolo").style.color="red"
  } else{
    document.getElementById("palo").style.color="black"
    document.getElementById("simbolo").style.color="black"
  }
}