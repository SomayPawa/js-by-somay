console.log("jai maata di");
// now time for function

function somay(){
    console.log("my name is somay lal pawa");
}
let x = somay();
console.log(x);

// parametrise function but these functions are very easy

let user = {
    name:"somay",
    age:21
}
function kuchbhi(anyobj){
    return `name is ${anyobj.name} and age is ${anyobj.age}`;
}

let and = kuchbhi(user);
console.log(and);


// aur second method

let and1 = kuchbhi({
    name:"vinay",
    age:22
})

console.log(and1);
// very classic concept use function + obj

// for array 

let arr = [1,2,3,4];
function arraypass(arraypass){
    return arr[0];
}
let slp = arraypass(arr);
console.log(slp);