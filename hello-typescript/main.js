var myVar = 'variable me';
function myFunc(x, y) {
    return x + y;
}
// ES 6 or ES 2015
var nom = 2; // variable declaration.
var PI = 3.14; // Constant declaration.
var number = [1, 2, 3];
//Map function
number.map(function (value) {
    return value * 2;
});
// ES 2015
number.map(function (valuer) {
    return valuer * 2;
});
var Matematic = /** @class */ (function () {
    function Matematic() {
    }
    Matematic.prototype.sum = function (x, y) {
        return x + y;
    };
    return Matematic;
}());
