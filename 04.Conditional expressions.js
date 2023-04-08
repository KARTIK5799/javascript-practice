let a = 18;
let b=3

//   *****The If Statement*****

if (b<=18){
    console.log("your are mad");
}


//   *****The If-Else Statement*****


if (a<=18){
    console.log("your are not eligible to vote");
}else{
    console.log("your are  eligible to vote");
}


//   *****The If-Else If-Else Statement*****


if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  console.log("You are a kid and you can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}
