// console.log(this);
// function fun(){
//     console.log(this)
// }
// fun();

console.log(this);
function fun(){
    // console.log(global==this)
    this.p="something"
    return 10;
}
let o1=fun();
let o2=new fun();
console.log(o1)
console.log(o2)

