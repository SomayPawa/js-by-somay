console.log("jai maata di");
// noramal func and arrow func

// normal func

const ans = function(){
    let username = "somaylalpawa";
    console.log(username);
}
ans();

// now time for arrow function

const ans1 = () => {
    let username1 = "somaylalpawa";
    console.log(username1);
}
ans1();

const ans2 = (num1,num2) => num1+num2

console.log(ans2(5,3));


// iffe

//()() => first () meaning is function definition and () is function execution

(function chai (){
    console.log("hello bro")
})();

(  (name) =>{
    console.log(`second chai ready ${name}`)
})("somay");


