var x=function(){
var n=prompt('¬ведите номер послед.fibonacci начина€ естественно с 0 и в этом алгоритме до 100 но это легко изменить :)','');
var a=0,b=1,c;
if(n==0){
alert(0);
}
if(n==1){
alert(1);
}
for(var i=2;i<=n;i++){
c=a+b;
a=b;
b=c;
if(i==n){
alert(c);
}
	}
		}
x();