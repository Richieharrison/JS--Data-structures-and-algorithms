//variable types/ data types -> bool, number, string, undefined, object, function and symbol

// 1. typeof -> returns the type of variable

const bool = true;
const num = 1;
const string = "Hello world";
const und = undefined;
const obj = {
    name: 'My name is Object'
}
const fn = ()=>{
    return "I am just a function"
}

console.log(typeof(fn));

//2. Truthy and falsey check

if(node){} //->node is a variable; if value is a falsey(null, undefined or empty will be false)

// JS being a scripting language and a variable is not assigned a type during declaration but type is interpreted as code runs

fn === num // checks for value and type
fn == num //checks for value only

//Variables assigned to objects might be equal but they live in different addresses in memory so they aren't equal
