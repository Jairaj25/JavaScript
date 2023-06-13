//Question 2
function Calc(N1 , N2 , Sign){
    switch(Sign){
        case '+' : {
            var sum = N1+ N2;
            console.log("Addition of "+N1+" & "+N2+" is "+sum);
            break
        }
        case '-' : {
            var subtract = N1-N2;
            console.log("Subtraction of "+N1+" & "+N2+" is "+subtract);
            break
        }
        case '/' : {
            var division = N1/N2;
            console.log("Division of "+N1+" & "+N2+" is "+division);
            break
        }
        case '*' : {
            var multiply = N1 * N2;
            console.log("Multiplication of "+N1+" & "+N2+" is "+multiply);
            break
        }
    }
}
Calc(2,3,'*');