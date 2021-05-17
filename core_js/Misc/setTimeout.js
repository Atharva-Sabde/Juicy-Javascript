function help(){
    console.log('about to start')
    setTimeout( function calldude(){ 
        console.log('ddddd')}
         , 3000)
}

// help()

function x(){
    var i= 1;
    setTimeout(
        function(){
            while(i!=10){
                console.log(`Waiting for ${i} seconds...`)
                i++;
            }
        }
        , 2000
    )
}
x();