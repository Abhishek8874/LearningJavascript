const a = {}
a.name = " Saaaaaaam"
a.id = "123abc"
a.c = 123
// console.log(a);

const obj1  = {1:"abc",2:3,4:3} // combining two object is same as combining two arays together
const obj2 = {0:"cde",2:7,9:56}
const obj3 = Object.assign(obj1,obj2)
   //or     with help of spread method
//const obj3 = {...obj1,...obj2}
console.log(obj3);

           //or
// const obj3 = Object.assign({},obj1,obj2)
           // these two ways to access the object 3 after combination

/// THRERE IS MANY PROPERTIES LIKE ownMypropertu. keys, values and many more for that visit MDN documenation site
// to explore more abot object and its propertirs
const course = {
        courseName : "javascript",
        price:'999',
        teacher : "bcd"
    }
 const { courseName} = course
 const { courseName:CN} = course ///for making name sort of coures name
//console.locg(CN); // these methid known as de structure of data it mainy used when dat is coming from an api while working react

 console.log(courseName);
 