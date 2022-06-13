//擴充上一題，加入 reduce 函數(約分)
class Ratio
{
    constructor(x, y)
    {
        this.x = x
        this.y = y
    }
    toString()
    {
        return this.x + "/" + this.y
    }
    neg() { // 點變成負的
        return new Ratio(-this.x, -this.y)
    }
    add(rat2) { //兩點相加
        return new Ratio(rat1.x+rat2.x, rat1.y+rat2.y)
    }
    sub(rat2) { //負的p2 p1+(-p2)
        return this.add(rat2.neg()) 
    }
    mul(rat2) {
        return new Ratio(rat1.x*rat2.x, rat1.y*rat2.y)
    }
    div(rat2) {
        return new Ratio(rat1.x/rat2.x, rat1.y/rat2.y)
    }
    reduce() {
        let den = this.y, num = this.x
        for(let i = num; i > 0; i--)
        {
            if(this.x % i == 0 && this.y % i == 0)
            {
                return new Ratio(this.x / i, this.y / i)
            }
        }
    }
}

var rat1 = new Ratio(1,3), rat2 = new Ratio(2,4)

console.log("rat1.toString() ->", rat1.toString())
console.log("rat2.toString() ->", rat2.toString())
console.log("rat1.add(rat2) ->", rat1.add(rat2).toString())
console.log("rat1.sub(rat2) ->", rat1.sub(rat2).toString())
console.log("rat1.mul(rat2) ->", rat1.mul(rat2).toString())
console.log("rat1.div(rat2) ->", rat1.div(rat2).toString())
console.log("rat2.reduce().toString() ->", rat2.reduce().toString())
