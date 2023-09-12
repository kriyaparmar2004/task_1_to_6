const firstName='kriya'
const lastName='Parmar'
const age=19
const person={
    firstName:firstName,
    lastName:lastName,
    age:age,
}
const todo={
    id:1,
    title:'Take ',
    user:{
        name: 'John',
    }
}
const {id,title,user:{name}} =todo
console.log(name)
const numbers=[23,67,33,49]
const[first,second,...rest]=numbers
console.log(first,second,rest)