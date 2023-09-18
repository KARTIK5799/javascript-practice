const name ="hitesh";
console.log(typeof name);
const value=50;
// console.log(name+value+" GG"); it is not modern day syntex it is correct to used
console.log(`hello my name is ${name} and my value is ${value}`);//string intercolation :-use backticks instead of this ("...") 
const myName=new String('kartik');//another syntax to initalize the string
//it will treate as object
console.log(typeof myName);//it will give object
console.log(myName.__proto__);//we can use to select
console.log(myName[0]);
 


/*--------------------String methods--------------------*/

const gameName = new String('hitesh-hc-com')

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
