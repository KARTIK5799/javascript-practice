//Write a JavaScript function that reverse a number.
function reverse(){
    let a=prompt("enter the number");
    let b=a.toString().split("").reverse().join("");
if(b.endsWith("-")){
    b="-"+parseInt(b);
}
    alert("the reverse no is "+b);
}