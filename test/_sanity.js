var
 test = require("tape-catch"),
 FluentCalculator = require("../")
;

test("sanity test", function (t) {
    t.plan(1);

    var calc = new FluentCalculator();

    t.equal(calc.value(), 0, "is the initial value zero?");
});
