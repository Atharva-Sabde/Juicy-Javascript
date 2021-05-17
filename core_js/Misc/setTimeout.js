
// function x(){
//     var i= 1;
//     setTimeout(
//         function(){
//             while(i!=10){
//                 console.log(`Waiting for ${i} seconds...`)
//                 i++;
//             }
//         }
//         , i*1000
//         )
        
//         console.log("hello im first")
        
//     }
    // x();


function y(){
    for(let j=1 ; j<=5 ; j++){
        setTimeout(
            function(){
                console.log(`Waiting for ${j} seconds...`)
            } , j*1000 
        )
    }
    console.log("hello im first")
}
    
y();