let isprime=true;
let n=37;
if(n===1){
    console.log("1 is neither prime not composite no");
}
else if(n>1){
    for(let i=2;i<n;i++){
        if(n%i==0){
            isprime=false;
            break; 
        }
    }

if(isprime)
{
    console.log(`${n} is prime no`);
}
else{
    console.log(`${n} is composite`);
}
}
// else(n<1){
//     console.log(`${n} is not negative`);
// }