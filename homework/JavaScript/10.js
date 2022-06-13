//寫一個函數可以做任意函數的定積分
function integral(f,a,b)
{
    var ans=0, dx=0.0000001
    for(let i = a; i < b; i += dx)
    {
        ans += dx * f(i)
    }
    return ans
}

console.log("integral((x) -> x * x, 0, 1) ->",integral((x) => x * x, 0, 1))
