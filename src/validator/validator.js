function validator(data){
let isValid = true;

if(data.name.length < 5){
    isValid = false;
    return isValid;
}else{
    return isValid;
}

}
export default validator;