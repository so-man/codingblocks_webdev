// let obj={
//      anInteger:123,
//      astring:"asdas",
//      afunction:function(){
//          console.log(this.anInteger + this.astring)
//         return true;
//      }
// }
// x=obj.afunction;
// // console.log(typeof x)
// console.log(x());
// // x();


let p={
     a:10
}
let q=Object.create(p);
console.log(q);