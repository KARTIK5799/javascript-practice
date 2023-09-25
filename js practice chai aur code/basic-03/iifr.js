// Immediately Invoked Function Expressions (IIFE)

(
   function chai(){
    console.log(`hi`)
   }
)();

((name)=>{
    console.log(`no ${name}`)
})('kartik')