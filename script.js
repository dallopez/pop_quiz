var num;
do {
  num = prompt("type in a number", 0);
} while (num <= 10 && num);

if(num <= 10 && num) 
{
	alert('type another number');
}
else if(num >= 10 && num) 
{
	alert('program is over');
}
else if(num <= 10 && num) 
{
	alert('type another number');
}