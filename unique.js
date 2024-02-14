const arr=[1,2,1,3,4,5,1,2,8];
const result=arr.reduce((acc,current)=>{

   if(!acc.includes(current)){
    acc.push(current);
   }
   return acc;

},[])

console.log(result);