//Question 3
let array = [1,2,3,4,10,11];
Array_length = array.length;

if(Array_length < 5){
    console.log("invalid array");
}
else{
    MaxDiffInArray(array);
}

function MaxDiffInArray(Arr){
    let Difference = 0;
    for(let i = 0; i < Array_length-1; i++)
    {
        Temp = diff(Arr[i],Arr[i+1]);
        if (Temp>Difference)
        {
            Difference = Temp;
        }
    }
    console.log(Difference);
}

function diff(a, b) {
    return Math.abs(a - b);
  }