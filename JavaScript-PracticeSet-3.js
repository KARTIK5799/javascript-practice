//write a program to print mark of student in an object using for loop
const obj ={
    kartik:13,
    raj:12,
    yash:14
}

for (let i=0; i<Object.keys(obj).length;i++){
    console.log(Object.keys(obj)[i]+" : "+obj[Object.keys(obj)[i]])
}


/*for(let x in obj){
    console.log(x+" : " +obj[x])
}*/