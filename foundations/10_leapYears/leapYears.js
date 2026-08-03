const leapYears = function(num) {
    if (
    num % 4 === 0 &&
    num % 100 !== 0
    ) {
        return true;
    } else {
        if (num % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(1996 % 4);

// Do not edit below this line
module.exports = leapYears;
