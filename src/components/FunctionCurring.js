let multiply =function(x,y){
    console.log(x*y)   
}

let multiplyTwo=multiply.bind(this,2);
multiplyTwo(3)
// output   6

let multiplyThree=multiply.bind(this,3);
multiplyThree(5)
// output   15

//considering only parameters in bind ignoring main function parameters
let multiplyThree1=multiply.bind(this,3,4);
multiplyThree1(5)
// output   12

// 1st parameter--->3 acts as "this" here
let multiplyThree11=multiply.bind(3,4);
multiplyThree11(5)
// output   20

//arguments not passed in bind
let multiplyThree2=multiply.bind(this);
multiplyThree2(5,3)
// output   15

//6  15  20  15



//other way using closures

let dummyMultiply=function(x){
    return function(y){
        console.log(x*y)
    }
}
let multiplyClosure=multiply(2)
multiplyClosure(3)
//output 6