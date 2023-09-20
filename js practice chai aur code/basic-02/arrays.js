const arr=[1,2,3,4,5,6,7,8];//decleration type1
const arr2=new Array(0,9,8,7,6,5,4,3,2,1);//decleration type 2
// console.log(arr2);


//array methods
// arr2.push(6);
// arr2.push(62);
// arr2.pop()
// arr2.unshift(92)
// arr2.shift()
// console.log(arr2.includes(9)) it chackes the value is present or not



// slice, splice
const myArr=new Array(22,33,44,55,66,77)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //slice dont change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//splice change the original array it cut the part from original array
console.log(myn2);