//for loop
let a =10;
let b=0;
for (let i=0 ;i<=a;i++)
{
    
b+=i;
}
console.log(b);

//for in loop

let obj={
    name:"kartik",
    roll:12,
    attendence:true
}

console.log(obj["name"]);
for (let x in obj){
    console.log(x+" : "+obj[x]);
}

//for of loop
let z=[1,2,3,4,5]
for(let num of z){
    console.log(num);
}