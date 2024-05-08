// 1. Global variables - are available in the global scope and are accessible from anywhere in the program

test: "sss";
//This is not Good practice

// 2. var- functional scope - they float to the top during runtime(variable hoisting)
function var_eg(){
    var test = "test";
}

// 3. Let -  Block scope - closests to the block scope {}

{
    let test = "test";
}
