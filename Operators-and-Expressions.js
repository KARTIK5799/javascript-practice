let a=2;
let b=3;
//Arithmetic operators are used to perform mathematical calculations. Here are the most common arithmetic operators in 
console.log("Addition is "+a+b);//Addition
console.log("Subtraction is "+ (b - a));//Subtraction
console.log("Multiplication is "+a*b);//Multiplication
console.log("Division is "+a/b);//Division
console.log("Modulus is "+a%b);//Modulus
console.log("Exponentiation is "+(a**b));//Exponentiation


//JavaScript also has some shorthand operators that combine arithmetic with assignment. Here are some examples:
console.log("a += b is the same as a = a + b "+(a+=b));//Addition assignment
console.log("a -= b is the same as a = a - b "+(a-=b));//Subtraction assignment
console.log("a *= b is the same as a = a * b "+(a*=b));//Multiplication assignment	
console.log("a /= b is the same as a = a / b "+(a/=b));//Division assignment
console.log("a %= b is the same as a = a % b "+(a%=b));//Modulus assignment	

//Post increment and Pre increment. 

// Post-increment: returns the value of a, then increments it
console.log(a++);//output:2
console.log(a);//output:3

// Pre-increment: increments the value of a, then returns it
console.log(++a); // output: 4

// Post-decrement: returns the value of a, then decrements it
console.log(a--); // output: 4
console.log(a);   // output: 3

// Pre-decrement: decrements the value of a, then returns it
console.log(--a); // output: 2


//Comparison operators are used to compare two values and return a Boolean value (true or false) depending on whether the comparison is true or false. Here are the most common comparison operators in JavaScript
console.log(a>b);//output:false  (Greater than & less than)
console.log(a==b);//output:false (Equal to = type coercion is performed)
console.log(a===b);//output:false (strict Equal to = no different types)
console.log(a!=b);//output:true (Not equal to = type coercion is performed)
console.log(a!==b);//output:true (Not equal to = no different types)

//Logical Operators
console.log(a<b && b>a);//output:true (Logical AND. Returns true if both operands are true)
console.log(a<b && b<a);//output:false(both are not true thats why false.)
console.log(a<b || b<a);//output:true(Logical OR. Returns true if at least one of the operands is true, otherwise false.)
console.log(!(a > 5)); //output:true (Logical NOT. Returns the opposite of the operand. If it's true, it returns false. If it's false, it returns true.)
console.log(!(a < 5)); //output:false (Logical NOT. Returns the opposite of the operand. If it's true, it returns false. If it's false, it returns true.)

