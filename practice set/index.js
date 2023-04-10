//Write a JavaScript function that reverse a number.
function reverse(){
    let a=prompt("enter the number");
    let b=a.toString().split("").reverse().join("");
if(b.endsWith("-")){
    b="-"+parseInt(b);
}
    alert("the reverse no is "+b);
}

//Write a JavaScript function that returns a passed string with letters in alphabetical order
function alpha(){
    let a=prompt("Enter the random alphabets");
let b=a.split("").sort().join("");
alert(b);
}


//write a program to create random number guess game
function random () {
     let x=Math.floor((Math.random()*100)+1);
     console.log(x);
     let chance=0;
     let y=parseInt(prompt("guess the number"));
     chance++;
     compare(y);
     function compare(y){
                if(x===y){
                        alert(`your guess is right you guess in ${chance}`);
                }else if(x<y){
                        alert("your guess is greter ");
                        y=parseInt(prompt("guess again the number"));
                        chance++;
                        compare(y)
                }else if(x>y){
                        alert("your guess is smaller ");
                        y=parseInt(prompt("guess again the number"));
                        chance++;
                        compare(y)
                }else{
                        alert("Invalid number")
                        y = parseInt(prompt("Enter a number"));
                        chances++;
                        compare(n);
                    }
             }
}  



//write a program to check you are eligible to drive or not
function drive(){
    let age = prompt("Enter your age")
    age = Number.parseInt(age)

    
    const canDrive = (age) => {
        return age >= 18 ? true : false
      }
         if(canDrive(age)){
                alert("you can drive");
         }else{
                 alert("you  cant drive");
         }
}