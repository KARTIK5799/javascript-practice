//Create a variable of type string and try to add a number to it.
let a="kartik";
let b=5;
console.log(a+b);

//Use the typeof keyword to see the data type of the variables in the previous question.
console.log(typeof a);

//Create a constant object in JavaScript and then try to change its value to another data type.
const a1={
    name :"kartik",
    id:2,
    attendence:true
}
console.log(a1);
//a1=43; it is not possible to change the value of constant object but we can change key values.

//Try to add a new key to the previous const object.
a1["name"]="joy";
console.log(a1);

//Create a JavaScript program to make a month dictionary like 1 = January, 2 = February, and so on.
const cal={
    1 :"January",
    2 :"February",
    joy:"happy"
}
console.log(cal[1]);
console.log(cal.joy);//we cannot use it with no.(1,2)it will show error.
