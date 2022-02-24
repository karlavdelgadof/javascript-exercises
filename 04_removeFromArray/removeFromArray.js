const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter( item => (!args.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
