let p={
    a:10
}
let q=object.create(p);
q.b=20;
console.log(q.a);
console.log(q.b)