function secondlargest(arr){
let large=arr[0];
let second=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        second=arr[arr.length-1];
        large=arr[i];

    }

}
return second;
// return large;

}
function firstlargest(arr){
    let large=arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            
            large=arr[i];
    
        }
    
    }
    // return second;
    return large;
    
    }
    // function duplicate(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
              if(arr[i]==arr[j]){
              console.log("duplicate",arr);
            }
            else{
                console.log("not duplicate no");
            }

        }
    }
    
    // }
let arr=[45,23,78,12,54,45,54];
secondlargest(arr);
console.log("second largest is",secondlargest(arr));
console.log("first largest is",firstlargest(arr));
// console.log("duplicate is",duplicate(arr));