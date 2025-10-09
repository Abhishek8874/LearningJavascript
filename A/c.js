
         //  working with fuctions and its properties

// function name(params) {
//     console.log('i');
//     console.log("c");
//     console.log("v");
//     console.log("s"); 
    
// }
// name()
//  function addNumbers(no1,no2) {
//      console.log(no1+n02);
//      //let no1 
     
    
// }

//  function addNumbers(no1,no2) {
     
//     // let result =no1 + no2 
//     //  return result              ////orrrr
//     return no1 + no2

//  }
//  //addNumbers(3,5)//or

// const result= addNumbers(3,5)
// console.log(result);

/// use of rest oprtator ... ths is known as rest opreator  alos know as spreado opreator only diffrence is theris usese
// rest oprrator is used when we need to pass many values in an function while working on it which is konown what users pas specially e comemmerce site , 
/// and it takes values in as array
function calculatePrice(...num) {
    return num
    
}
//console.log(calculatePrice(200,300,400,500,6000));

/// tking object in fuction

const user ={
    username :"mnb",
    course : 199,

}

function objectInFuction(anyobject) {
    console.log(`hey my name is ${anyobject.username} i brought an corese who price is ${anyobject.course}`);
    
}
objectInFuction(user)


// function with the array

const arry = [200,300.400]
function returnArray(getarray){
    return getarray[1]
}
console.log(returnArray(arry));
