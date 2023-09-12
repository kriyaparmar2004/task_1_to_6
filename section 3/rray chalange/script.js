//1st
const arr=[1,2,3,4,5]
arr.reverse()
arr.push(0)
arr.unshift(6)
// arr.pop(6)
console.log(arr)
//2nd
const arr1=[1,2,3,4,5]
const arr2=[5,6,7,8,9,10]
const a=arr1.concat(arr2)
a.splice(4,1)
console.log(a)