function testLoginUser(input){
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!emailPattern.test(input.email)){
        return 'Please provide a correct email to sign-up - REGEX TEST!'
    }else if(input.email.length < 5){
        return 'Please provide a correct email to sign-in.'
    }else if(input.email.length > 25){
        return 'Please provide a correct email to sign-in.'
    }else{
        return '';
    }
}

export default testLoginUser;