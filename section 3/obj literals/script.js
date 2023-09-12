let x
const person={
    name:'kriya',
    age: 19,
    isAdmin:true,
    address: {
        street:'dced',
        city:'efdcd',
        state: 'rcsds',
    },
    hobbies:['Music','sports'],
};
x=person.age
x=person['name']
x=person.address.state
x=person.hobbies[1]
person.name='Jane'
person['isAdmin']= false
person.has=true
person.greet=function()
{
    console.log(`Hello my name is ${this.name}`)
}
person.greet()

console.log(person)