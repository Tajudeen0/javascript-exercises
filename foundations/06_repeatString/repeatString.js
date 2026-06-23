function repeatString(string, num) {
    
    if (num > 0) {
        let stringInput = [];
        for (let i = num; i > 0; i--) {
            stringInput.push(string);
            stringOutput = stringInput.join('');
    } 
        return stringOutput;
    } else if (num == 0) {
        return ''
    } else {
        return 'ERROR'
    }

}


repeatString('hey', 5);


//const repeatString = function() {

//};

// Do not edit below this line
module.exports = repeatString;
