(function start(){
function glasletters(text){
var glas="או¸טמףû‎‏ÿ";
var resault="";
for(var i=0;i<glas.length;i++){
if(text.indexOf(glas[i])!=-1){resault+=glas[i];}
}
alert(resault);
}
glasletters('Âכאהטלטנ');

function soglasletter(text){
var soglas="בגדהזחיךכלםןנסעפץצקרשתü";
var resault="";
for(var i=0;i<soglas.length;i++){
if(text.indexOf(soglas[i])!=-1){resault+=soglas[i];}
}
alert(resault);
}
soglasletter('Âכאהטלטנ');

function account(text){
var resault;
resault=text.split(" ");
alert(resault.length);
}
account('1 2 3 4 5');
})();