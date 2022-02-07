// for (let i = 1; i < 6 ; i++){
//     console.log(i);
// }

function recursion (i){
    console.log(i);
    if(i >= 5){
        return;
    }
    recursion(i+1);
}
recursion(1);