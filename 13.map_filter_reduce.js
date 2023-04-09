const a=[1,2,3,4,5]


//map-function
let b = a.map((value)=>{
return value+1;
});
console.log(b);

//filter-function
let c = a.filter((x)=>{
return x<=3
})
console.log(c);