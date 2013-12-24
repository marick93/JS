var x=prompt('¬ведите количество элементов массива который надо отсортировать','');
var mass=new Array();
for(var z=0;z<x;z++){
var y=prompt('¬ведите элемент массива','');
mass[z]=y;
}
var funct=function(mass){
var d=mass.length;
for(var i=0;i<d-1;i++){
for(var j=0;j<d-1-i;j++){
if(mass[j+1]<mass[j])
{
var h=mass[j+1];
mass[j+1]=mass[j];
mass[j]=h;
}

	}
	
}

return mass;

}

alert(funct(mass));

