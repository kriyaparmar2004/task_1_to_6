let x,d
d=new Date(2021,6,10)// MONTH IS 0 INDEX
d=new Date('2021-07-10T12:30:55') //ISME 0 BASED NHI HAI
d=Date.now()
d=new Date(1693668614702)
x=d.getTime()
x=d.getMonth()    //0 based
x=d.getDay()
x=`${d.getMonth()}`
console.log(x)