const add=(a,b) =>{
    return a + b
}
//implicit return
const subtract = ( a,b ) => a-b

//you dont have to add parenthesis() when you pass only one argument
const double = a => a*2

// Returning an object
const createObj = () => ({
    name: 'Brad'
})
console.log(createObj())

numbers.forEach(function(n){
    console.log(n);
});

//Arrow function in a callback
numbers.forEach((n) => console.log(n))
