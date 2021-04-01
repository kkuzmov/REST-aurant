function testInput(input){
    if(input.name.length < 2){
        return 'Restaurant name is too short.'
    }else if(input.name.length > 25){
        return 'Restaurant name is too long.'
    }else if(input.location.length < 3){
        return 'Location name is too short.'
    }else if(input.name.length > 25){
        return 'Location name is too long.'
    }else if(isNaN(input.rating) || input.rating < 0 || input.rating > 5){
        return 'Please enter a rate between 0 and 5.'
    }else if(input.description.length < 10){
        return 'Description is too short, please provide more information on the restaurant.'
    }else if(input.description.length > 200){
        return 'Description is too long, please be briefer.'
    }else if(!input.imageUrl.startsWith('http') || !input.imageUrl.startsWith('https')){
        return 'Please provide a correct link to photo.'
    }
    else{
        return '';
    }
}

export default testInput;