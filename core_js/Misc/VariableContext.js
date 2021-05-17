
console.log(myName)
var myName = "cosmicdust"
// above code will print 'Undefined' because the variable is declared after the calling of that variable 
// the global context will know that a variable named myName exists in code below somewhere, but it will initialize 
// undefined



var myName = "cosmicdust"
console.log(myName)

// above code will print 'cosmicdust' because the variable is declared before its usage (calling), the global  context will
// know about it already and hence the value will be reflected.