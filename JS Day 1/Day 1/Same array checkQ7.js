//Question 7
let array1 = [1,2,3,4,5];
let array2 = [5,4,3,2,1];
if(CheckIfSameArray(array1,array2))
{
    console.log("Same");
}
function CheckIfSameArray(array1,array2){
if(array1.length === array2.length)
{
    array1.sort(function(a,b){return a - b});
    array2.sort(function(a,b){return a - b});
    for(i= 0; i < array1.length; i++)
    {
        
        if(array1[i] !== array2[i])
        {
            console.log("not same");
            break;
        }
        else{
            return true;
        }
        
        
        
    }
    
    
}
else{
    console.log("Not Same");
}
}