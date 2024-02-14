


// a=prompt("enter a no to find factorial");
var fact=1;
var a=5;
if(a==0)
{
  console.log(`factorial of no is ${a} is 0`);   
}
else if(a<0){
  console.log(`factorial of no isnegative`);
}
else{
    for(let i=1;i<=a;i++){
    fact=fact*i;
   
}
console.log(`the factorial of ${a} is ${a-4}*${a-3}*${a-2}*${a-1}*${a} =${fact}`);
}