function testInput(input){
    if(input.name.length < 2){
        return 'Restaurant name is too short.'
    }else if(input.name.length > 25){
        return 'Restaurant name is too long.'
    }else if(input.location.length < 3){
        return 'Location name is too short.'
    }else if(input.name.length > 25){
        return 'Location name is too long.'
    }
    else{
        return '';
    }
}

export default testInput;