let a=0;
let b=1;
let c;
let n=6;
let t;
console.log("fibonacci series");
for( let i=0;i<=n;i++){
 c=a+b;
    t=c;
    a=b;
    b=t;
    console.log("fibbonacci series is",c);
}