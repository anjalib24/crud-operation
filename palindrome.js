var n=121;
let temp=n;
let rev=0;
let m;
while(n!=0){
m=n%10;
rev=rev*10+m;
// n=n/10;
n=Math.floor(n/10);
}

if(temp==rev){
    console.log(`no is palindrome ${temp}`);
}
else{
    console.log(` not a palindrome ${temp}`);
}