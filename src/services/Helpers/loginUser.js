function testLoginUser(input){
    if(input.email.length < 5){
        return 'Please provide a correct email to sign-in.'
    }else if(input.email.length > 25){
        return 'Please provide a correct email to sign-in.'
    }else{
        return '';
    }
}

export default testLoginUser;