function createcounter(init,delta){
    let x=20
    function count(){
        let x=10
        init+=delta
        console.log(init)
        
    }    return count;
}
const c1=createcounter(1,3)
// const c2 =createcounter(4,2)
// c1()
// c2()
console.log(c1());