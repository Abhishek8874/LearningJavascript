class User {// creating class
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // super class constructor _: The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        this.email = email //when working with class inheritance, the super() keyword is used within a derived (child) class's constructor to call the constructor of its parent (super) class. This is a crucial step to ensure proper initialization of the inherited properties and methods.
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);