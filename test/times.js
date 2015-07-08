var
 test = require("tape"),
 FluentCalculator = require("../")
;

test("very simple multiplication", function (t) {
    t.plan(1);

    var calc = new FluentCalculator(5);
    calc.times(1);
    var value = calc.value();

    t.equal(value, 5, "test identity");
});

test("less trivial multiplication", function (t) {
    t.plan(1);

    var calc = new FluentCalculator(5);
    var value = calc.times(4).value();
    t.equal(value, 20, "does 5 x 4 = 20?");
});

test("chained multiplication", function (t) {
    t.plan(1);

    var calc = new FluentCalculator(2);
    var value = calc.times(4).times(3).value();

    t.equal(value, 24, "does 2 x 4 x 3 = 24?");
});
