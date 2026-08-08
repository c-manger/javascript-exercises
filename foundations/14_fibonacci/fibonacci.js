const fibonacci = function(num) {
    let number = Number(num);
    
    if (number < 0) {
        return 'OOPS';
    }

    if (number === 0) {
        return 0;
    }

    const arr =[1];

    for (let i = 1; i < number; i++) {
        if (i === 1) {
            arr.push(i);
        };

        if (i > 1) {
            const entry = arr[i - 1] + arr[i  -2];
            arr.push(entry);
        };
    };

    return arr[arr.length - 1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
