class Vector {

    constructor(array) {
      this.a = array
    }
  
    length() {
      let len = 0
      for(let i=0; i<this.a.length; i++)
      {
        len += this.a[i]*this.a[i]
      }
        return Math.sqrt(len)
    }

    // 點變成負的
    neg() {
      let a = []
      let i=0
      while (i<this.a.length) {
        a[i] = this.a[i]*-1
        i++;
      }
      return new Vector(a)
    }

    //點相加
    add(p2) {
      let a = [];
      for (let i=0; i<this.a.length; i++) {
        a[i] = p1.a[i]+p2.a[i]
      }
      return new Vector(a)
    }

    //負的p2 p1+(-p2)
    sub(p2) { 
      return this.add(p2.neg())
    }

    //目前點跟p2相減再取長度
    distance(p2) { 
      return this.sub(p2).length()
    }
  
    toString() {
      return this.a.toString()
    }

    //點內積
    dot()
    {
        let d = 0;
        for(let i = 0;i < p1.a.length ; i++)
        {
            d += p1.a[i] * p2.a[i];
        }
        return d;
    }
}

  let p1 = new Vector([2,3,4]), p2 = new Vector([1,2,3])
  console.log("p1=", p1, ", p2=", p2)
  console.log("p1.length() =",p1.length(), ", p2.length() =",p2.length())
  console.log("p1.neg()=", p1.neg(), ", p2.neg()=", p2.neg())
  console.log("p1.add(p2)=", p1.add(p2))
  console.log("p1.sub(p2)=", p1.sub(p2))
  console.log("p1.distance(p2)=", p1.distance(p2))
  console.log("p1.toString() =", p1.toString(), ", p2.toString() =",p2+'')
  console.log("p1.dot(p2)", p1.dot(p2))
