const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let i = 0;
    do {
        return string.repeat(num);
        i++;
    } while (i < num);

};


// Do not edit below this line
module.exports = repeatString;
