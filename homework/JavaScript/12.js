//擴充上一題，加入 add, sub 兩個函數
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
    neg() {
        return new Ratio(-this.x, -this.y)
      }
    add(rat2) {
        return new Ratio(rat1.x+rat2.x,rat1.y+rat2.y)
    }
    sub(rat2) {
        return this.add(rat2.neg()) 
    }

}

var rat1 = new Ratio(1,3), rat2 = new Ratio(2,4)

console.log("rat1.toString() ->", rat1.toString())
console.log("rat2.toString() ->", rat2.toString())
console.log("rat1.add(rat2) ->", rat1.add(rat2).toString())
console.log("rat1.sub(rat2) ->", rat1.sub(rat2).toString())
