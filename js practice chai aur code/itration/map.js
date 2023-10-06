myNums=[1,2,3,4,5,6,7,8,9,10]
const nums=myNums.map((nums)=>nums+5)
// console.log(nums)

//chaining

let num2=myNums
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num<50)
console.log(num2)