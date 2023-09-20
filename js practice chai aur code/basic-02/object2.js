//const newObj = new Object();//it is singleton decleration of object
const newObj={
    name:"kartik",
    userFullame:{
        firstName:"kartik",
        lastName:"sapkal"
    }
}
// console.log(newObj.userFullame.firstName);
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"k"}
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);