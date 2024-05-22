function sumDigits(x) {
    var sum = 0;
    while (x) {
        sum += x % 10;
        x = (x - (x % 10)) / 10;
    }
    return sum;
}
console.log(sumDigits(1234));
function luckyNumber(x) {
    var secondHalf = x % 1000;
    var firstHalf = x - (x % secondHalf) / 1000;
    return sumDigits(firstHalf) === sumDigits(secondHalf);
}
console.log(luckyNumber(123321));
function fourOrSeven(x) {
    return x === 4 ? 7 : 4;
}
console.log(fourOrSeven(7));
function banana() {
    var a = "a";
    var b = "b";
    return (b + a + +a + a).toLowerCase();
}
console.log(banana());
