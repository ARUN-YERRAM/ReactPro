//let x=function(a,b){
  //  console.log("Function expression")
  //  console.log(a+b)
//}
//x(10,20)
//anonymous function
//let x=function(){
//    console.log("anonymous function")
//}
//x()
//arrow function

//let add=(a,b)=>{
//    console.log("arrow function")
//    return a+b;

//}
//console.log(add(10,20))
//rest parameters recieves arguments as array

//calling function
/*function myfun(...remArgs){
   console.log(a)
   console.log(b)
   console.log(remArgs)

}
myfun(10,20,30,40)
//myfun()
//myfun(10)*/

//returnimg a function
//function fun(){
//    return function calc(x){
//      return x*x
//    }
//}
//let a=fun()
//console.log(a(100))

//nested functions and closures

function outerfun(){
    let a=10;
    console.log(" i am outer function")
    function innerfun(){
        let b=20;
        console.log("i am inner function")
        return a+b;
    }
    return innerfun()
}
console.log(outerfun())