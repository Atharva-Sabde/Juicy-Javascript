var x=10;

a();
b();
console.log(x);
function a(){
    var x = 50;
    console.log(x);
}

function b(){
    var x = 70;
    console.log(x);
}


console.log(window.x);
console.log(a)
