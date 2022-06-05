//a 到 b 之間無法被 3, 5, 7 整除的數字
function filter(a, b)
{
    var A = []
    for (let i = a; i < b; i++)
    {
        if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0)
        {
            A.push(i)
        }
    }
    return A
}

console.log("filter357(5,10) = ",filter(5, 10))
console.log("filter357(5,15) = ",filter(5, 50))
