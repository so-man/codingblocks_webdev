function createcounter(initlval,delta){
    let val=initlval;
    let del=delta;
    function counter(){
        del=val+del;
        return del;
    }
    return counter;
} 
let fivecount=createcounter(5,5);
console.log(fivecount())
console.log(fivecount())
console.log(fivecount())