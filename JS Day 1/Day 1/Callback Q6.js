//Question 6
function display(value)
{
    console.log(value);
}

function sum(n1, n2, callback)
{
    add = n1+n2;
    callback(add);
}

sum(4, 5, display);