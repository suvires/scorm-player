function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5smpAAPcptH":
        Script1();
        break;
      case "6UuYAn9eDT3":
        Script2();
        break;
      case "5lzUlaBf2Au":
        Script3();
        break;
      case "6R9o8kVSjpr":
        Script4();
        break;
      case "60sZtaH4AKv":
        Script5();
        break;
  }
}

function Script1()
{
  var SLIDE_ID=0;

// ---------------------------------------------------
var p = GetPlayer(); 
var lmsAPI = parent;

var contador=0;
var seg=p.GetVar("SEGUIMIENTO_PARCIAL");
var arr = seg.split("");

for (var i=0;i<=SLIDE_ID;i++) {
   arr[i]="C";
}

var i=0;
for (i=0;i<arr.length;i++) { 
            if (arr[i]=="C"){
                     contador++;
            }  
}

var puntuacion=Math.floor((contador*100)/seg.length);
var nuevo = arr.join("");
p.SetVar("SEGUIMIENTO_PARCIAL",nuevo);

try {
console.log(nuevo + ", " +puntuacion);
if(lmsAPI.SetScore==null){  lmsAPI = window; }
lmsAPI.SetScore(puntuacion,100,0);
}catch(ee){ 
var a=1;
}


}

function Script2()
{
  var SLIDE_ID=1;

// ---------------------------------------------------
var p = GetPlayer(); 
var lmsAPI = parent;

var contador=0;
var seg=p.GetVar("SEGUIMIENTO_PARCIAL");
var arr = seg.split("");

for (var i=0;i<=SLIDE_ID;i++) {
   arr[i]="C";
}

var i=0;
for (i=0;i<arr.length;i++) { 
            if (arr[i]=="C"){
                     contador++;
            }  
}

var puntuacion=Math.floor((contador*100)/seg.length);
var nuevo = arr.join("");
p.SetVar("SEGUIMIENTO_PARCIAL",nuevo);

try {
console.log(nuevo + ", " +puntuacion);
if(lmsAPI.SetScore==null){  lmsAPI = window; }
lmsAPI.SetScore(puntuacion,100,0);
}catch(ee){ 
var a=1;
}


}

function Script3()
{
  var SLIDE_ID=2;

// ---------------------------------------------------
var p = GetPlayer(); 
var lmsAPI = parent;

var contador=0;
var seg=p.GetVar("SEGUIMIENTO_PARCIAL");
var arr = seg.split("");

for (var i=0;i<=SLIDE_ID;i++) {
   arr[i]="C";
}

var i=0;
for (i=0;i<arr.length;i++) { 
            if (arr[i]=="C"){
                     contador++;
            }  
}

var puntuacion=Math.floor((contador*100)/seg.length);
var nuevo = arr.join("");
p.SetVar("SEGUIMIENTO_PARCIAL",nuevo);

try {
console.log(nuevo + ", " +puntuacion);
if(lmsAPI.SetScore==null){  lmsAPI = window; }
lmsAPI.SetScore(puntuacion,100,0);
}catch(ee){ 
var a=1;
}


}

function Script4()
{
  var SLIDE_ID=3;

// ---------------------------------------------------
var p = GetPlayer(); 
var lmsAPI = parent;

var contador=0;
var seg=p.GetVar("SEGUIMIENTO_PARCIAL");
var arr = seg.split("");

for (var i=0;i<=SLIDE_ID;i++) {
   arr[i]="C";
}

var i=0;
for (i=0;i<arr.length;i++) { 
            if (arr[i]=="C"){
                     contador++;
            }  
}

var puntuacion=Math.floor((contador*100)/seg.length);
var nuevo = arr.join("");
p.SetVar("SEGUIMIENTO_PARCIAL",nuevo);

try {
console.log(nuevo + ", " +puntuacion);
if(lmsAPI.SetScore==null){  lmsAPI = window; }
lmsAPI.SetScore(puntuacion,100,0);
}catch(ee){ 
var a=1;
}


}

function Script5()
{
  var SLIDE_ID=4;

// ---------------------------------------------------
var p = GetPlayer(); 
var lmsAPI = parent;

var contador=0;
var seg=p.GetVar("SEGUIMIENTO_PARCIAL");
var arr = seg.split("");

for (var i=0;i<=SLIDE_ID;i++) {
   arr[i]="C";
}

var i=0;
for (i=0;i<arr.length;i++) { 
            if (arr[i]=="C"){
                     contador++;
            }  
}

var puntuacion=Math.floor((contador*100)/seg.length);
var nuevo = arr.join("");
p.SetVar("SEGUIMIENTO_PARCIAL",nuevo);

try {
console.log(nuevo + ", " +puntuacion);
if(lmsAPI.SetScore==null){  lmsAPI = window; }
lmsAPI.SetScore(puntuacion,100,0);
}catch(ee){ 
var a=1;
}


}

