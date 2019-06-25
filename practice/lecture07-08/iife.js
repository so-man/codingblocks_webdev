// (function(){
//     console.log("say hello")
// })();

// var a=100;
// (function print(){
//     a=10;
// })();

// console.log(a);




// if(true){
//     (function print(){
//         var a=100;
//         console.log(a)
//     })();
//     console.log(a);
// }



(function(l,p,q,r){
    l(p(3,3));
    l(q(3))
    l(r(10))
})(console.log,Math.pow,Math.sqrt,Math.sin)