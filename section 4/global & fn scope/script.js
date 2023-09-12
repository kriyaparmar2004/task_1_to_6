const x=100; //global variable  global scope alag hai
function run(){
    console.log(window.innerHeight)
    console.log(x,'in function') 
run()
function add(){
    const y=50 //local scope
    console.log(y)
}
add()