const num=[1,2,3,4,5,6,7,8,9];
const num2=[11,12,13,14,15,16,17,18,19]
console.log(typeof ((num.toString()).length));
num.pop();
console.log(num);
num.push(32);
console.log(num);
console.log(num.shift(),num);
console.log(num.unshift(78),num);
delete num[3];
console.log(num);
console.log(num.concat(num2));
console.log(num.sort());
