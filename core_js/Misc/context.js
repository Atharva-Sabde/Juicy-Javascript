var myName = "Atharva";

if(myName === window.myName){
    console.log('true');
}else{
    console.log("false");
}

//The above code when executed on browser , it works fine  (due to global context )

/* But if we execute this code on compiler (node) the following error is discovered :
if(myName === window.myName){
    ^

ReferenceError: window is not defined
at Object.<anonymous> */

