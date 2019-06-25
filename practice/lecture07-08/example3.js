function f1(){
    function f2(){
        console.log('hello')
    }
    return f2;
}
let x=f1();
console.log(typeof x)
console.log(x())