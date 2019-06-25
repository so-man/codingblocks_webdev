let arr=[6,5,4,3,2,1]

console.log(arr.sort())
let arr2=[1,9,34,3,14]
function compare(a,b){
    return a-b;
}
console.log(arr2.sort(compare))

let arr3=[12,4,5,3,7,9]
let arr4=arr3.map(function(item){
    return 100-item;
})
console.log(arr4);