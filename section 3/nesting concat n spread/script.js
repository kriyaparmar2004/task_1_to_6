let x;
const fruits=['apple','mango','banana']
const berries=['csxds','rwad','freddsa']
// fruits.push(berries)
// x=fruits[3][1]
const allFruits=[fruits,berries]
x=fruits.concat(berries)// isse nested nhi banta
// spread oprators
x=[...fruits,...allFruits,...berries]
const arr=[1,2,[3,4],5,[6,7],8,9]
x=arr.flat()
x=Array.from('123456')
const a=1,b=2,c=3
x=Array.of(a,c,b)
console.log(x)
