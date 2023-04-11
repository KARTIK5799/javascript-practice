let user=prompt("enter S , W, G ");
let randumNumber=Math.floor(Math.random()*3);
const arr=["S","W","G"][randumNumber]


const match = (arr, user)=>{
    if(arr === user){
      return "Nobody"
    }
    else if(arr === "S" && user==="W"){
      return "arr"
    }
    else if(arr === "S" && user==="G"){
      return "user"
    }
    else if(arr === "G" && user==="W"){
      return "user"
    }
    else if(arr === "G" && user==="S"){
      return "arr"
    }
    else if(arr === "W" && user==="S"){
      return "user"
    }
    else if(arr === "W" && user==="G"){
      return "arr"
    }
  }
  let result = match(arr, user)
 console.log(`CPU:${arr} User:${user} <br>The winner is: ${result.toUpperCase()}` )