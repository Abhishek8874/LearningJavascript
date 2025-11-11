const user = {     // object litreals
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); 
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// use of this +++===== this refers to the current object which need be excuted it diffrentiate between current and other object.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  // this is an implicit and by default as well if return or not it will work
}

// new key word is an constrcutor function which creates a new intanses(new object and alocates the new memory) every time when it call
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);