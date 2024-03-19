console.log("jai maata di");
let jsuser = {
    name :"somay",
    age:22,
    branch:"cse",
    "fullname" :"somay lal pawa"
}
// console.log(jsuser.name);
// console.log(jsuser['age']);
// console.log(jsuser["fullname"])

// these are the two method we can access this object values


// some good and tricky concept

// Object.freeze(jsuser);

// after freeze concept we can't change our object

jsuser.greeting = function(){
    console.log(`hello bro my name is somay ${this.age}`);
}

console.log(jsuser.greeting());