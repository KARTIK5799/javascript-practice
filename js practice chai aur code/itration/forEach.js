// const coding=["js","cpp","java","python"]
// coding.forEach((item,index,array)=>{//forEach do not return value
//     console.log(`in Given Array  ${item} is on ${index} index`)
//     console.log(`we can print complete array too like this, [${array}]`)

// });

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((nums)=>nums<5);//it will directly return the value and if we add condition in scope{nums<5} then we have to return the values
// const newNums2=myNums.filter((nums)=>{
//     return nums<3 //here we need to use return otherwise filter direclty return the values

// }
// );
// console.log(newNums)
// console.log(newNums2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const newBooks=books.filter((bk)=>{
    return bk.genre==="Non-Fiction" && bk.publish>1985
  })
  console.log(newBooks)