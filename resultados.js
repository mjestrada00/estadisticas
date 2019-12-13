function atendidos(){
    var num1=Number(document.getElementById('n1').value);
    var num2=Number(document.getElementById('n2').value);
    var res=num1-num2;
    document.getElementById('res').value=res;
}
function mayor(){
    var num1=Number(document.getElementById('s1').value);
    var num2=Number(document.getElementById('s2').value);
    var num3=Number(document.getElementById('s3').value);
    var num4=Number(document.getElementById('s4').value);
    
    var mayor = Math.max(num1,num2,num3,num4);
    document.getElementById('mayor').value=mayor;
}
function promedio1(){
    var suma=0;
    var num1=Number(document.getElementById('n1').value);  
var promedio, myArray= new Array(num1);
for(var i=0; i<num1;i++){
myArray[i]= tiempo;}
for(var i=0; i<num1;i++){
suma+=myArray[i];
promedio=suma/num1;
document.getElementById('tiempo').value=promedio;
}
}
function promedio2(){
    var suma=0;
    var num1=Number(document.getElementById('n1').value);  
var promedio, myArray= new Array(num1);
for(var i=0; i<num1;i++){
myArray[i]= tiempo;}
for(var i=0; i<num1;i++){
suma+=myArray[i];
promedio=suma/num1;
document.getElementById('tiempo').value=promedio;
}
}
function totales(){
    var num1=Number(document.getElementById('s1').value);
    var num2=Number(document.getElementById('s2').value);
    var num3=Number(document.getElementById('s3').value);
    var num4=Number(document.getElementById('s4').value);
    var llamadas=num1+num2+num3+num4;
    document.getElementById('llamadas').value=llamadas;
}
function totales1(){
    var num1=Number(document.getElementById('n1').value);
    var num2=Number(document.getElementById('n2').value);
    var res=num1-num2;
    document.getElementById('atendidas').value=res;
}
function totales2(){
    var num1=Number(document.getElementById('n1').value);
    var num2=Number(document.getElementById('n2').value);
    var res=num2-num1;
    document.getElementById('no atendidas').value=res;
}