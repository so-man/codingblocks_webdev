

prime=function(x){
    for(var i=2; i<x ;i++){
        if(x%i === 0){
           document.write(x +" is not prime");
           return false;
        }
    }
    document.write( x  + " is not prime");
    return true;
}
var a=prime(5);
console.log(a);

