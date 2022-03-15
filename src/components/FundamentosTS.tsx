type User ={
    name: string
    email:string
    address: {
        city: string
        state?:string
    }
}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, your email is ${user.email}, Your city is ${user.address.city}, your state is${user.address.state}` 
}


const user:User= {
    name: "Lucas",
    email:"lucascdoliveira.dev@gmail.com",
    address:{
        city:"Valparaiso",
        state:"Goias"
    }

}

showWelcomeMessage(user);