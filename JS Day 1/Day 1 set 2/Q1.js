//Question 1 decimal to binary

let Decimal_num = 10;
let binary = '';
console.log(Decimal_num.toString(2));
while(Decimal_num>0)
{
    binary = parseInt(Decimal_num%2)+ binary;
    Decimal_num = parseInt(Decimal_num/2);
}
console.log(binary);