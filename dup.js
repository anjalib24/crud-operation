// function duplicate(arr){
    
    const findduplicate=(arr)=>{
    
    let sor=arr.sort();
    let a=sor.length;
    let result=[];
    for(let i=0;i<a-1;i++){
       
          if(sor[i+1]===sor[i]){
result.push(sor[i]);
          
        }
        
    }
    return result;
};
let arr=[45,23,78,12,54,45,54];
console.log("duplicate is",findduplicate(arr));
let arr1=arr.slice().sort();
console.log(arr1);


 



// }
