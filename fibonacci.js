var x=function(){
var n=prompt('������� ����� ������.fibonacci ������� ����������� � 0 � � ���� ��������� �� 100 �� ��� ����� �������� :)','');
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