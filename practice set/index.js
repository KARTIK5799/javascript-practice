//Write a JavaScript function that reverse a number.
/*function reverse(){
    let a=prompt("enter the number");
    let b=a.toString().split("").reverse().join("");
if(b.endsWith("-")){
    b="-"+parseInt(b);
}
    alert("the reverse no is "+b);
}
*/
//Write a JavaScript function that returns a passed string with letters in alphabetical order
function alpha(){
    let a=prompt("Enter the random alphabets");
let b=a.split("").sort().join("");
alert(b);
}