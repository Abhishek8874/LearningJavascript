//The """set""" syntax binds an object property to a function to be called when there is an attempt to set that property. 
// set an prperty the object show that if any anbody want to access that it would be shown to them not real one, it's denied to acess main property and give or set new to the body so  they can work on it
//The""" get'''"" syntax binds an object property to a function that will be called when that property is looked up.
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);