var
 test = require("tape-catch"),
 FluentCalculator = require("../")
;

test("simple division", function (t) {
    t.plan(1);

    var calc = new FluentCalculator(10);
    calc.divided_by(5);
    var value = calc.value();

    t.equal(value, 2, "does 10 / 5 = 2?");
});

test("chained division", function (t) {
    t.plan(1);

    var calc = new FluentCalculator(20);
    var value = calc.divided_by(2).divided_by(5).value();
    t.equal(value, 2, "does 20 / 2 / 5 = 2 ?");
});

test("division by zero", function (t) {
    t.plan(1);

    var calc = new FluentCalculator(1);

    var derivedValue = calc.divided_by(0).value();
    var expectedValue = 1 / 0;
    t.equal(derivedValue, expectedValue, "does dividing by zero agree with Javascript behavior?");
});
