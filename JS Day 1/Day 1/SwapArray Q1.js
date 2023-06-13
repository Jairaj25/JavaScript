//Question 1
var array_to_be_Swapped = [1,2,3,4,5,6,7];
array_length= array_to_be_Swapped.length;
EvenCheck(array_to_be_Swapped);

function EvenCheck(Arr){
    if(array_length%2 == 0)
    {
        swap(Arr);
        
    }
        else{
           console.log("Error");
        }
    
    }


function swap(Array){


    for (var i = 0; i < array_length / 2; i++) {
        var tmp = Array[i];
        Array[i] = Array[i + array_length / 2];
        Array[i + array_length / 2] = tmp;
      }
    console.log(Array);
}