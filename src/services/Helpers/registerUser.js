function testRegisterUser(input){
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let usernameAndPasswordPattern = /\w/;
    if(!emailPattern.test(input.email)){
        return 'Please provide a correct email to sign-up - REGEX TEST!'
    }else if(input.email.length < 6){
        return 'Please provide a correct email to sign-up'
    }else if(!input.email.includes('@')){
        return 'Please provide a correct email to sign-up - NO @!'
    }else if(!usernameAndPasswordPattern.test(input.username)){
        return 'Username should consist only of latin characters and digits.'
    }else if(input.username.length < 4){
        return 'Username should consist of at least 4 symbols'
    }else if(!usernameAndPasswordPattern.test(input.password)){
        return 'Password should consist only of latin characters and digits.'
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