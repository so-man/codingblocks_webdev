let p={
    a:"sus",
    x:true,
    b:10
}
let q=Object.create(p);
q.age=20;
let r=Object.create(q);
r.l=40;
console.log(r)
r.b=r.b+1;
console.log(r.b);
console.log(r)