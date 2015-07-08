NAME
====

FluentCalculator - A calculator with a fluent API.


DESCRIPTION
===========

A very simple calculator with an easy to use and descriptive API.


EXAMPLE
=======

```language-javascript
var FluentCalculator = require("fluent-calculator");

var calc =
    (new FluentCalculator(1))
    .plus(1)
    .times(4)
    .divided_by(2)
    .minus(2)
    .plus(-2)
    ;

// Prints 0
console.log(calc.value());

calc =
    (new FluentCalculator(calc))
    .plus(5)
    .minus(5)
    ;

// Prints 0
console.log(calc.value());

calc
.set(10)
.minus(5)
.divided_by(5)
.minus(1)
;

// Prints 0
console.log(calc.value());

```

TESTING
=======

To test, run:

```
git clone https://github.com/cttttt/fluent-calculator
docker build -t cttttt/fluent-calculator-tester fluent-calculator
docker run -ti cttttt/fluent-calculator-tester
```

AUTHOR
======

Chris Taylor
