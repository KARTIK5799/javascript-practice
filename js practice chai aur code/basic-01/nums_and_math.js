const score =400;
console.log(typeof score);
//it is default to consider number


const balance=new Number (23);


//console.log(balance);//it will show [Number:23]

//console.log(typeof balance);


/*----------------------Methods----------------------*/

//console.log(typeof balance.toString());
console.log(balance.toFixed(3)); //it will give 23.000 the last 3 zeros are given using tofixed

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)