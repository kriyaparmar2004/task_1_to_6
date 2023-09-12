(function(){ 
    const user='John'
    console.log(user)
    const hello = () => console.log('Hello from the IIFE')
    hello()
})()

//iife function passing args
function (name){
    console.log('hello'+ name)
}('Shawn')

function hello(){
    console.log('Hello')
}()

const getCelsius = (f) => ((f-32)*5)/9
console.log(getCelsius(50))

function minmax(arr){
    const min= Math.min(...arr)
    const max= Math.min(...arr)
    console.log(max)
}

minmax([1,2,3,4])