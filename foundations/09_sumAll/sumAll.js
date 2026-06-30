const sumAll = function(...args) {
    let inputs = args.sort()
    let i = args[0];
    let sum = 0;

    if (inputs.every(v => v >= 0) && inputs.every( v => Number.isInteger(v))) {
        for (i; i <= args[1]; i++) {
            sum += i;
        }
         return sum;
    } else {
        return "ERROR";
    }


   
};

console.log(sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;
