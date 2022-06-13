//寫一個有理數物件，包含 toString() 函數
class Ratio
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    toString()
    {
        return this.x + "/" + this.y;
    }
}

var rat = new Ratio(1,3);
console.log(rat.toString());
