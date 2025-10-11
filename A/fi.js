 const nums = [1,2,3,4,5,6,8,9,11,12,33,44]
 nums.filter( (item) => nums>10)
//  console.log(nums);
 const a = nums.filter( (num) => {
  return  num > 4
     // we need to put 'return' here otherwise it will return [] empty array
 })
 console.log(a);
 