const myNum=[1,2,3,4,5]
let myTotal=myNum.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currentvalue:${currval}`)
    return acc+currval

},0)

myTotal=myNum.reduce((acc,currval)=>acc*currval,2)
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);