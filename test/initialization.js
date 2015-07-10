var
 test = require("tape-catch"),
 FluentCalculator = require("../")
;

test("initializer tests", function (t) {
    t.plan(5);

    var calc = new FluentCalculator();
    var value = calc.value();
    t.equals(value, 0, "are calculators initialized with 0 by default?");

    calc = new FluentCalculator(1);
    value = calc.value();
    t.equals(value, 1, "does scalar initialization work?");

    calc = new FluentCalculator("2");
    value = calc.value();
    t.equals(value, 2, "does string initialization work?");

    calc = new FluentCalculator(new FluentCalculator(3));
    value = calc.value();
    t.equals(value, 3, "does copy constructor work?");

    calc = new FluentCalculator("abcdef");
    value = calc.value();
    t.ok(isNaN(value), "does using a non-number result in NaN?");
});
