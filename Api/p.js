
// // this can be poosible like this as well
// new Promise(function(resolve, reject))

const p1 = new Promise(function(resolve, reject) {
    

    // do asysnc task
    // db cryptography, network
    setTimeout(function (params) {
        console.log("performing promises task");
        resolve() // resolve calling without calling it , promises could not be completed and excuted

        
        
    },1000) // seting time for excution in milisecond
    
})
 p1.then(function () {// in this we don need to pass any parameter because of .then , .then get connected automatically with privious function ressolve is called 
                      // hence we don't require to pass any aprameter their 
    console.log("promise is consumed");
    
 
})// from this we are calling or consuming promise to perform given task

///++++++++++++++++++ passing data to the resolve

const p2 = new Promise(function(resolve,reject) {
    setTimeout(function () {
        
        resolve({username:"asd", email:"abc@example.com"})
        
        
    },1000)
    
})
p2.then(function(user) {
    
    console.log(user);
    
})


//++++++++++ uses of reject +++++++
const p3 = new Promise(function(resolve,reject){
    setTimeout(function () {// usinf arrow function
        let error= true
        if(!error){
            resolve({username:"asd", email:"abc@example.com", coures:"js"})
        }else{
            reject ("something went wrong")


        }


        
    }, 1000);
})

p3.then((user)=>{               ///The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It stores the callbacks within the promise it is called on and immediately returns another Promise object, allowing you to chain calls to other promise methods.
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(functon(error){       ///The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns another Promise object, allowing you to chain calls to other promise methods. It is a shortcut for then(undefined, onRejected).
    console.log(error);
    (error);

    
}).finally(()=> console.log("promise either resolved or rejected"))
//The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns another Promise object, allowing you to chain calls to other promise methods.