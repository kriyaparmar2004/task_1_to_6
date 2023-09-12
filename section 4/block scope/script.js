const x= 100;
if (true){
    const y=100;
    console.log(x+y);
}
//we use 'let' instead of 'var' because var does not have block scope but let 
//has block scope (global & private)
//cannot access var outside of functions but can be accessed out of if statements & for loops which let cannot(and it shouldnt' for good sake)


for( let i=0;i<=10;i++){
    console.log(i); //i has limited scope, block scope
}