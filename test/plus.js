var
 test = require("tape-catch"),
 FluentCalculator = require("../")
;

test("simple addition", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();
    calc.plus(1);
    var value = calc.value();

    t.equal(value, 1, "does incrementing a value result in 1?");
});

test("chained addition", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();
    var value = calc.plus(1).plus(2).plus(3).value();
    t.equal(value, 6, "does 1 + 2 + 3 = 6?");
});

test("complex addition", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();
    var value =
	calc
	.plus(1)
	.plus(-1)
	.plus(0.5)
	.plus(-0.5)
	.plus(20)
	.plus(-20)
	.value();
    t.equal(value, 0, "does a series of opposing additions result in 0?");
});
