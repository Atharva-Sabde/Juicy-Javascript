// function isSleeping(workingday , vacation){
//     return !workingday || vacation;
// }

// console.log("is Employee sleeping :" + isSleeping(true, true));
// console.log("is Employee sleeping :" + isSleeping(true, false));
// console.log("is Employee sleeping :" + isSleeping(false, true));
// console.log("is Employee sleeping :" + isSleeping(false, false));




//-===========================================================================


function spider(man){
    console.log("spider");
    return man;
}

function man(){
    console.log("man");
}

function bat(man){
    console.log("Bat");
    const s = spider(man);
    console.log(s);
}
bat(man);
