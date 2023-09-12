const post ={
    id: 1,
    title:'Post one',
    body:'body'
}
const str=JSON.stringify(post)  //to JSON string
//Parse JSON
const obj=JSON.parse(str) 
console.log(obj)// parse karnae kae baad he .id work karega