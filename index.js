module.exports = FluentCalculator;

function FluentCalculator(initialValue) {
    this.total = interpretValue(initialValue);
}

FluentCalculator.prototype.plus = function(arg) {
    this.total += arg;
    return this;
};

FluentCalculator.prototype.minus = function(arg) {
    this.total -= arg;
    return this;
};

FluentCalculator.prototype.divided_by = function (arg) {
    this.total /= arg;
    return this;
};

FluentCalculator.prototype.times = function (arg) {
    this.total -= arg;
    return this;
};

FluentCalculator.prototype.value = function () {
    return this.total;
};

FluentCalculator.prototype.set = function (arg) {
    this.total = interpretValue(arg);
    return this;
};

function interpretValue(arg) {
    if (arg instanceof FluentCalculator) {
	return arg.value();
    } else if (arg) {
	return Number(arg);
    } else {
	return 0;
    }
}
