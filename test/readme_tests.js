var
 test = require("tape"),
 FluentCalculator = require("../")
;

test("readme tests", function (t) {
    t.plan(3);

    var calc =
	(new FluentCalculator(1))
	.plus(1)
	.times(4)
	.divided_by(2)
	.minus(2)
	.plus(-2)
	;
    var value = calc.value();
    t.equal(value, 0, "does phase 1 work?");

    calc =
	(new FluentCalculator(calc))
	.plus(5)
	.minus(5)
	;
    value = calc.value();
    t.equal(value, 0, "does phase 2 work?");

    calc
    .set(10)
    .minus(5)
    .divided_by(5)
    .minus(1)
    ;
    value = calc.value();
    t.equal(value, 0, "does phase 3 work?");
});
