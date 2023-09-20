const mySymbol = Symbol("key1");
const obj = {
    name: "kartik",
    edu: "be",
    "stream info": "computer science",
    [mySymbol]: "jjste2"
};

// console.log(`My Name is ${obj.name} and My Education is ${obj.edu} in ${obj["stream info"]}. Just use of symbol ${obj[mySymbol]}`);
console.log(typeof mySymbol);
console.log(obj);

// singleton
// Object.create

// object literals


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

obj.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
obj.email = "hitesh@microsoft.com"
// console.log(JsUser);

obj.greeting = function(){
    console.log("Hello JS user");
}
obj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());