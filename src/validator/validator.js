function validator(data){
let isValid = true;

if(data.name.length < 5){
    // isValid = false;
    return `Name - "${data.name}" - shorter than required!`;
}else if(data.name.length > 25){
    return `Name - "${data.name}" - longer than required!`;
}else if(data.location.length < 4){
    return `Location - "${data.location}" is shorter than required!`;
}else if(data.location.length > 15){
    return `Location - "${data.location}" is longer than required!`;
}else if(data.rating < 0 || data.rating > 5){
    return `Rating must be between 0(zero) and 5(five)`;
}else if(data.description.length < 15 || data.description.length > 150){
    return `Description must be between 15 and 150 symbols long!`;
}else if(!data.imageUrl.startsWith('http') || !data.imageUrl.startsWith('https')){
    return `Please provide a correct link to photo`;
}
else{
    return isValid;
}

}
export default validator;