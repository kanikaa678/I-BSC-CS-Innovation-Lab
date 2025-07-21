// variables declared outside any function or block are in the global scope.
// they are accessible amywhere in the script.
let x=10;
function sendmessage(){
    console.log("Welcome Js")
    console.log(x); // accessing inside the function
}
sendmessage();
console.log(x);// accssing outside the function



//function scope
 
function greet(){
    let y = 10;//can be accssed only inside the function
    console.log(y)
}
//console.log(y) -leads error
greet();


// Block scope

// the variable is accssed only within {}

function check(){
    if(true){
        let name = "webdevelopment";
        console.log(name);
    }

    //console.log(name); leads error
}
check()

//callback

// callback function in js:
// A callback  function in javascript is a function that is passed as an argument to another function
//it is comman for:
// Handling asynchronous operations (like API calls,timeouts, or event hamdling)
//customizing behaviour inside functions

function First(){
    console.log("This is my first function")
}
function Second(callback){
    console.log("This is my second function")
    callback();
    //setTimeout(callback,2000)
    //setInterval(callback,2000);
}
Second(First)

//arrow function

let count=0;
let Input=() =>{
    count++;
    console.log(count);
    if(count < 5){
        Input();
    }
}
Input();