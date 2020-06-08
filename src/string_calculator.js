class stringCalculator {
  constructor() {
    this.regex1 = /\d{1,}/gm;
  }

  add(string) {
    let results = string.match(this.regex1);
    let results = 0;

    if (string == "") {
      return 0;
    } else if (numbers.length === 1) {
      return parseInt(numbers);
    } else {
      res = numbers.split(",");
      var total = 0;
      var arrayLength = res.length;
      for (var i = 0; i < res.length; i++) {
        total = total + parseInt(res[i]);
      }
      return total;
    }
  }
};

function calculateSum(numbers) {
  var sum = 0;
  _.each(numbers, function (number) {
    var n = parseInt(number);

    if (isNaN(n) || n > 1000) {
      n = 0;
    }

    if (n < 0) {
      throw "negative numbers not allowed";
    }

    sum += n;
  });
  return sum;
}

console.log(calc.add(1))
console.error(calc.calculateSum(sum))



module.exports = { stringCalculator };
