function registerUser(user='bot')
{
    if(!user)
    user='bort'
    return user+' is registered '
}
console.log(registerUser('kriya'))
//...-rest par
function sum(...numbers)
{
   let total=0
   for(const num of numbers)
   total+=num
return(total)
}
console.log(sum(1,2,3,567))
