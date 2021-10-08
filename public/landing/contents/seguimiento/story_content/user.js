function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hcpYv98evj":
        Script1();
        break;
      case "6Sxn22ejLaA":
        Script2();
        break;
      case "5xoRqA6ZUXH":
        Script3();
        break;
      case "643j52CPrec":
        Script4();
        break;
  }
}

function Script1()
{
  var p = GetPlayer(); 
var SLIDE_ID=0;
var actual=new Array();
var nuevo="";
var puntuacion=0;
var contador=0;
var lmsAPI = parent;
var seg="";
var lmsSeg="";
var b=new Array();

var sc = p.GetVar("SEGUIMIENTOCARGADO");
if (sc=="0") {  
   p.SetVar("SEGUIMIENTOCARGADO","1"); 
   if (lmsSeg=="") {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
   } else {
      lmsSeg = lmsAPI.GetComments();   
      b = lmsSeg.split(" | ");
      lmsSeg = b[b.length-1];
      seg=lmsSeg;
   }

} else {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
}

actual=seg.split("");
actual[SLIDE_ID]="C";
nuevo = actual.join("");

var i=0;
for (i=0;i<actual.length;i++) { 
            if (actual[i]=="C"){
                        contador++;
            }  
}

puntuacion=Math.floor((contador*100)/seg.length);
p.SetVar("SEGUIMIENTOAVANZO",nuevo);
p.SetVar("PROGRESO",puntuacion);

if(lmsAPI.SetScore!=null){
  lmsAPI.SetScore(puntuacion,100,0);
  lmsAPI.WriteComment(nuevo);
}else{
  SetScore(puntuacion,100,0);
  WriteComment(nuevo);
}

}

function Script2()
{
  var p = GetPlayer(); 
var SLIDE_ID=1;
var actual=new Array();
var nuevo="";
var puntuacion=0;
var contador=0;
var lmsAPI = parent;
var seg="";
var lmsSeg="";
var b=new Array();

var sc = p.GetVar("SEGUIMIENTOCARGADO");
if (sc=="0") {  
   p.SetVar("SEGUIMIENTOCARGADO","1"); 
   if (lmsSeg=="") {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
   } else {
      lmsSeg = lmsAPI.GetComments();   
      b = lmsSeg.split(" | ");
      lmsSeg = b[b.length-1];
      seg=lmsSeg;
   }

} else {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
}

actual=seg.split("");
actual[SLIDE_ID]="C";
nuevo = actual.join("");

var i=0;
for (i=0;i<actual.length;i++) { 
            if (actual[i]=="C"){
                        contador++;
            }  
}

puntuacion=Math.floor((contador*100)/seg.length);
p.SetVar("SEGUIMIENTOAVANZO",nuevo);
p.SetVar("PROGRESO",puntuacion);

if(lmsAPI.SetScore!=null){
  lmsAPI.SetScore(puntuacion,100,0);
  lmsAPI.WriteComment(nuevo);
}else{
  SetScore(puntuacion,100,0);
  WriteComment(nuevo);
}

}

function Script3()
{
  var p = GetPlayer(); 
var SLIDE_ID=2;
var actual=new Array();
var nuevo="";
var puntuacion=0;
var contador=0;
var lmsAPI = parent;
var seg="";
var lmsSeg="";
var b=new Array();

var sc = p.GetVar("SEGUIMIENTOCARGADO");
if (sc=="0") {  
   p.SetVar("SEGUIMIENTOCARGADO","1"); 
   if (lmsSeg=="") {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
   } else {
      lmsSeg = lmsAPI.GetComments();   
      b = lmsSeg.split(" | ");
      lmsSeg = b[b.length-1];
      seg=lmsSeg;
   }

} else {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
}

actual=seg.split("");
actual[SLIDE_ID]="C";
nuevo = actual.join("");

var i=0;
for (i=0;i<actual.length;i++) { 
            if (actual[i]=="C"){
                        contador++;
            }  
}

puntuacion=Math.floor((contador*100)/seg.length);
p.SetVar("SEGUIMIENTOAVANZO",nuevo);
p.SetVar("PROGRESO",puntuacion);

if(lmsAPI.SetScore!=null){
  lmsAPI.SetScore(puntuacion,100,0);
  lmsAPI.WriteComment(nuevo);
}else{
  SetScore(puntuacion,100,0);
  WriteComment(nuevo);
}

}

function Script4()
{
  var p = GetPlayer(); 
var SLIDE_ID=3;
var actual=new Array();
var nuevo="";
var puntuacion=0;
var contador=0;
var lmsAPI = parent;
var seg="";
var lmsSeg="";
var b=new Array();

var sc = p.GetVar("SEGUIMIENTOCARGADO");
if (sc=="0") {  
   p.SetVar("SEGUIMIENTOCARGADO","1"); 
   if (lmsSeg=="") {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
   } else {
      lmsSeg = lmsAPI.GetComments();   
      b = lmsSeg.split(" | ");
      lmsSeg = b[b.length-1];
      seg=lmsSeg;
   }

} else {
       seg=p.GetVar("SEGUIMIENTOAVANZO");
}

actual=seg.split("");
actual[SLIDE_ID]="C";
nuevo = actual.join("");

var i=0;
for (i=0;i<actual.length;i++) { 
            if (actual[i]=="C"){
                        contador++;
            }  
}

puntuacion=Math.floor((contador*100)/seg.length);
p.SetVar("SEGUIMIENTOAVANZO",nuevo);
p.SetVar("PROGRESO",puntuacion);

if(lmsAPI.SetScore!=null){
  lmsAPI.SetScore(puntuacion,100,0);
  lmsAPI.WriteComment(nuevo);
}else{
  SetScore(puntuacion,100,0);
  WriteComment(nuevo);
}

}

