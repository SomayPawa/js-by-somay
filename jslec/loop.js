console.log("jai maata di");
let arr = [1,2,3,4];
// arr.forEach((item)=>{
//     console.log(item);
// })

// for in and for of loop 
// for of loop use for map because map is not iterable
// for in loop use for arr,obj ,string and so on

// map
let map = new Map();
map.set(1,"first");
map.set(2,"second");

// for (const key of map) {
//     console.log(key)
// }

// for-in loop use every where


// filter concept

let mynums = [1,2,3,4,5,6,7,8,9];

let newnum = mynums.filter((num)=>{
    return num>4
})

console.log(newnum);

// if you want to use for each loop then 

const newarr = [];
mynums.forEach((item)=>{
    if(item>4){
        newarr.push(item);
    }
})

console.log(newarr);