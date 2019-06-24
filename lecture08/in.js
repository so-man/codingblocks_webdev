function fn(str){
    // console.log(this)
console.log(str)
}
fn.bind({x:2})("helllo")