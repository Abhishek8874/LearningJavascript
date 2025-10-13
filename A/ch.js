///////++++==============+++++  '''  CHANING '''' ++++++=================

const myNumers = [1,2,3,4,5,6]

// syntex
//const myNums = myNumers.map( (num)=> num*10).map()
const myNums = myNumers
               .map( (num)=> num*10)
               .map((num) => num+1)
               .filter((num)=> num>=40) //// chaning can be done with map and fillter
console.log(myNums);


///////////        =====   '''   reducer ''''' ======
 const n = [4,5,6,7,8,9]

 const mt = n.reduce(function (acc,crval) { /// acc =:> accumulator,crval =:> current value
    console.log(`acc:-> ${acc} crval:->${crval}`);///trying print what actully going into ac and crval 
    
    return acc+crval
    
 },0)  //  0 is intial value where you want to start 
 console.log(mt);
 // with => function 
//  const mt = n.reduce((acc,crval) => acc=crval , 0)
//  console.log(mt);
 
 