const a= [1,2,3,4,5,6]

//for-loop
for (let i=0;i<=(a.length-1);i++){
    a[i]=(a[i]*2); 
}
console.log(a);

//for-each
a.forEach((x)=>{
    (x*=2);
   
});
console.log(a);

//for-of
for (let item of a){
    (item*=2);
}
console.log(a);
