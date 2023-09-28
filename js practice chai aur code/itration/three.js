const arr1=[1,2,3,4,5,6,7,8,9]
for(const num of arr1){
    // console.log(num)
}

const itr =new Map()
itr.set('name','kartik');
itr.set('addr','rh no 2');

for(const [key,value] of itr){
    // console.log(key,":-",value)
}
for(const key in itr){
    console.log(key)
}