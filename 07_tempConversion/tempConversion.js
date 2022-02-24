const ftoc = function(num) {
  return Number((num === 32) ? 0 : ((5 / 9) * (num - 32)).toFixed(1))
};

const ctof = function(num) {
  return Number( (num === 0) ? 32 : ((((9 / 5) * num) + 32)).toFixed(1)) 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
