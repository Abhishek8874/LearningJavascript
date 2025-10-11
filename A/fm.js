const map = new Map()
map.set("i","India")
map.set("fr","france")
map.set("usa","America")
// console.log(map)
/// for of loop

for (const key of map) {
    // console.log(`${key}`);
    
    
}
for (const key of map) {
    //console.log(`${key}`);
    
    
}
for (const [key , value] of map) {   /// destructure of array took palce in '''[]''''
    //console.log(`${key, ':- ',value}`);
    
    
}/// ''''for of ''' loop works in map but while worlking on objects it retun it is not itrrable , 
//// for object we use '''for in'''' loop

const myObject  = {
    c : "c ",
    p : "python",
    js : "javascript"


}
for (const key in myObject) {
    // console.log(key);
    
    // console.log(myObject[key]);
    
    //console.log(` ${key} : ${myObject[key]}`);
    
    
    
}

//++++++++ '''''''for each''''' +++++++++++++

const code = ["c","python","java","html"]
code.forEach(function (item) {
    // console.log(item);
    
    
});
// with => function
code.forEach((item) => {
    //console.log(item);
    
    
});

/// we can pass it with an function tooo

function pri(item) {
    console.log(item);
    
}
code.forEach(pri);