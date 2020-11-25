var modal = document.querySelector("#myModal");
var btn = document.querySelector("#myBtn");
var span = document.querySelectorAll(".close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.onload = function() {
  for(i = 0; i < 4; i++){
    document.getElementsByClassName("calc_input")[i].defaultValue = "1";
  }
}

const letscalculate = document.querySelector("#letscalculate");
const calulator = document.querySelector("#calculator");
const closeCalc = document.querySelector(".closeCalc");
letscalculate.onclick = function() {
  calulator.style.display = "block";
}
closeCalc.onclick = function() {
  calulator.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == calulator) {
    calulator.style.display = "none";
  }
}

const countButtom = document.querySelector("#countButtom");
const reset_sides = document.querySelector("#reset_sides");

countButtom.onclick = function(){
  inputArray = document.getElementsByClassName("calc_input");
  var sum = 0;
  for (i = 0; i < inputArray.length; i++) {
    let a = parseFloat(inputArray[i].value);
    if (typeof a != "number"){
      changeBorders(i);
      alert("you shoud enter number values")
    }
    if (a <= 0 || isNaN(a)){
      changeBorders(i);
      alert("you shoud enter values bigger then 0")
    }
    else{
      sum += a;
    }
  }
  document.getElementById("demo").innerHTML = "trapezium perimeter = "+ sum;
}

function changeBorders(i){
    document.getElementsByClassName("calc_input")[i].style.borderWidth = "3px";
    document.getElementsByClassName("calc_input")[i].style.borderColor = "red";
}

reset_sides.onclick = function(){
  for (i = 0; i < 4; i++){
    document.getElementsByClassName("calc_input")[i].value = "";
  }
  console.log(document.getElementsByClassName("calc_input")[0].value)
}