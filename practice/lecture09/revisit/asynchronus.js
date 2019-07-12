// function task(done){
//     console.log("doing the task")
//     done();
// }
// task(function(){
//     console.log("task was done")
// })
// console.log("we did a task")
 
function done(){
    console.log("task was done")
}
setTimeout(done,1000)
console.log("we did the task")