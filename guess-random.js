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

