function testRegisterUser(input){
    if(input.email.length < 6){
        return 'Please provide a correct email to sign-up'
    }else if(!input.email.includes('@')){
        return 'Please provide a correct email to sign-up - NO @!'
    }else if(input.username.length < 4){
        return 'Username should consist of at least 4 symbols'
    }else if(input.password.length < 8){
        return 'Password should consist of at least 8 symbols'
    }else if(input.password.length > 20){
        return 'Password should consist of no more than 20 symbols'
    }else if(input.password !== input.repeatPassword){
        return 'Password and repeat password should match!'
    }else{
        return '';
    }
}

export default testRegisterUser;