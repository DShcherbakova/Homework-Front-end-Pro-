
function sumDigits(x: number): number {
    let sum = 0;
    while (x) {
      sum += x % 10;
      x = (x - (x % 10)) / 10;
    }
    return sum;
}
console.log(sumDigits(1234));
  
function luckyNumber(x: number): boolean {
    let secondHalf = x % 1000;
    let firstHalf = x - (x % secondHalf) / 1000;
    return sumDigits(firstHalf) === sumDigits(secondHalf);
}
console.log(luckyNumber(123321));

  
function fourOrSeven(x: number): number {
    return x === 4 ? 7 : 4;
}  
console.log(fourOrSeven(7));
  
function banana(): string{
    let a = "a";
    let b = "b";
    return (b + a + +a + a).toLowerCase();
}
console.log(banana());