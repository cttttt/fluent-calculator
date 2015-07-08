var
 test = require("tape"),
 FluentCalculator = require("../")
;

test("simple subtraction", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();
    calc.minus(1);
    var value = calc.value();

    t.equal(value, -1, "does decrementing a value result in -1?");
});

test("chained subtraction", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();
    var value = calc.minus(1).minus(2).minus(3).value();
    t.equal(value, -6, "does 0 - 1 - 2 - 3 = -6?");
});

test("complex subtraction", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();
    var value =
	calc
	.minus(1)
	.minus(-1)
	.minus(0.5)
	.minus(-0.5)
	.minus(20)
	.minus(-20)
	.value();
    t.equal(value, 0, "does a series of opposing subtractions result in 0?");
});
