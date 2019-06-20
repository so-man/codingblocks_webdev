// function print(i,onDone){
//     for(var x=0;x<i;x++){
//         console.log(x);
//     }
//     onDone()
// }
// function aftercomplition(){
//     console.log("done");
// }
// print(10,aftercomplition)

var x=10;
var fn = function(){
    x=11;
    console.log(x);
}
fn();
console.log(x);