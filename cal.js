// JavaScript Document
function selected(){

//document.getElementById("hey").value=unit1;
}

function cal() {
var e = document.getElementById("unit1");
var unit1 = e.options[e.selectedIndex].value;
var ex = document.getElementById("unit2");
var unit2 = ex.options[ex.selectedIndex].value;
document.getElementById("hey").value=unit1;
document.getElementById("hey2").value=unit2;
var num1 =document.getElementById("cm");
var num2 =document.getElementById("m");
if ((unit1==="m" && unit2 ==="km") ){
document.getElementById("m").value=num1.value /1000;

}
else if ((unit1==="m" && unit2 ==="m")){
document.getElementById("m").value=num1.value;
}
else if ((unit1==="km" && unit2 ==="m")){
document.getElementById("m").value=num1.value *1000;
}
else if ((unit1==="km" && unit2 ==="km")){
document.getElementById("m").value=num1.value;
}
else if ((unit1==="m" && unit2 ==="cm")){
document.getElementById("m").value=num1.value * 100;
}
else if ((unit1==="km" && unit2 ==="cm")){
document.getElementById("m").value=num1.value *10000;
}
else if ((unit1==="cm" && unit2 ==="cm")){
document.getElementById("m").value=num1.value;
}
else if ((unit1==="cm" && unit2 ==="m")){
document.getElementById("m").value=num1.value / 100;
}
else if ((unit1==="cm" && unit2 ==="km")){
document.getElementById("m").value=num1.value /10000;
}
else if ((unit1==="in" && unit2 ==="in")){
document.getElementById("m").value=num1.value;
}

else if ((unit1==="in" && unit2 ==="cm")){
document.getElementById("m").value=num1.value * 2.54;
}
else if ((unit1==="in" && unit2 ==="m")){
document.getElementById("m").value=num1.value * 0.0254;
}
else if ((unit1==="in" && unit2 ==="km")){
document.getElementById("m").value=num1.value  / 39370.1;
}
else if ((unit1==="km" && unit2 ==="in")){
document.getElementById("m").value=num1.value  * 39370.1;
}
else if ((unit1==="cm" && unit2 ==="in")){
document.getElementById("m").value=num1.value  / 2.54;
}
else if ((unit1==="m" && unit2 ==="in")){
document.getElementById("m").value=num1.value  / 0.0254;
}
else if ((unit1==="ft" && unit2 ==="ft")){
document.getElementById("m").value=num1.value;
}
else if ((unit1==="ft" && unit2 ==="km")){
document.getElementById("m").value=num1.value  * 0.0003048;
}
else if ((unit1==="ft" && unit2 ==="m")){
document.getElementById("m").value=num1.value  * 0.3048;
}
else if ((unit1==="ft" && unit2 ==="cm")){
document.getElementById("m").value=num1.value  * 30.48;
}
else if ((unit1==="ft" && unit2 ==="in")){
document.getElementById("m").value=num1.value  * 12;
}
else if ((unit1==="in" && unit2 ==="ft")){
document.getElementById("m").value=num1.value  / 12;
}
else if ((unit1==="cm" && unit2 ==="ft")){
document.getElementById("m").value=num1.value  / 30.48;
}
else if ((unit1==="km" && unit2 ==="ft")){
document.getElementById("m").value=num1.value  / 0.0003048;
}
else if ((unit1==="m" && unit2 ==="ft")){
document.getElementById("m").value=num1.value  / 0.3048;
}
}
