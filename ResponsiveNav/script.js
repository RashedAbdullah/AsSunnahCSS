// This is last-in-first-out:

function a(){
    console.log("a");
}

function b(){
    console.log("b");
}

function c(){
    console.log("c");
}

function d(){
    console.log("d");
}

a(b(c(d())));