const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }. // if we use curly braces then we have to return compelsary if we use paranthesis insted of curly braces the no need to return

// const addTwo = (num1, num2) =>  num1 + num2 //1

// const addTwo = (num1, num2) => ( num1 + num2 )//2 :1 and 2 we do both way in arrow function

const addTwo = (num1, num2) => ({username: "hitesh"})//if you want to use object in arrow function then use parathesis


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()