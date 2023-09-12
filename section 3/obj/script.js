let x
const todo=new Object()
todo.id=1
todo.name='kriya'
x=todo
const obj1={a:1,b:2}
const obj2={c:3,d:4}
obj3={...obj1,...obj2}
obj4=Object.assign({})
const todos=[
    {id:1,name: 'veve'},
    {id:2,name: 'j jj'},
    {id:3,name: 'yffvhb'},
]

x=todos[0].name
x=Object.keys(todos)
x=Object.values(todo)
x=Object.entries(todo)
console.log(x)