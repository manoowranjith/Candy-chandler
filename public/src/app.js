// var chocolates = [
//     "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
//     "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
//     "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
//     "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
//     "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
//     "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
//     "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
//     "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
//     "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
//     "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
// ];
// var colors = [
//     "green",
//     "red",
//     "purple",
//     "blue",
//     "crimson",
//     "silver",
//     "pink",
// ];
// var chocolates=[]
// for(let i=0;i<100;i++)
// {
//     chocolates.push(colors[Math.floor(Math.random()*colors.length)]);
// }

// console.log(chocolates)

function addChocolates(chocolates,color,counts)
{
    for(let i=0;i<counts;i++)
    {
        chocolates.unshift(color)
    }
    return(chocolates)
}

function removeChocolates(chocolates,n)
{
    return(chocolates.slice(n,chocolates.length))

}

function dispenseChocolates(chocolate,n)
{

    return(chocolate.slice(-n))
}

function dispenseChocolatesOfColor(chocolate,n,color)
{
    var givenColor=[]
    for(let i=chocolate.length-1;i>=0;i--)
    {
        if(chocolate[i]==color && n!=0)
        {
            givenColor.push(chocolate[i])
            chocolate.splice(i,1)
            n--
        }
    }
    return chocolate
}

function noOfChocolates(chocolates)
{
    var  x=[];
    var array=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    for(let i=0;i<array.length;i++)
    {
        var count=0;
        for(let j=0;j<chocolates.length;j++)
        {
            if(array[i]==chocolates[j])
            {
                count++;
            }
        }
        x.push(count);
    }
    return x;
}

function sortChocolateBasedOnCount(chocolates)
{
    var array=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    var x=noOfChocolates(chocolates)
    for(let i=0;i<x.length-1;i++)
    {
        for(let j=i+1;j<x.length;j++)
        {
            if(x[i]<x[j])
            {
                let temp=x[i]
                x[i]=x[j]
                x[j]=temp

                let stemp=array[i]
                array[i]=array[j]
                array[j]=stemp
            }
        }
    }

    var result=[]
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<x[i];j++)
        {
            result.push(array[i])
        }
    }
    return(result)
}

function changeChocolateColor(chocolates,n,color,finalColor){
    for(let i=0;i<chocolates.length;i++)
    {
         if(chocolates[i]==color && n!=0)
         {
             chocolates[i]=finalColor
             n--;
         }
    }
    return(chocolates);
}

function changeChocolateColorAllOfxCount(chocolates,color,finalColor)
{
    var count=0;
    for(let i=0;i<chocolates.length;i++)
    {
         if(chocolates[i]==color)
         {
             chocolates[i]=finalColor
             count++
         }
    }
    chocolates.push(count)
    // console.log(count);
    return(chocolates)
}