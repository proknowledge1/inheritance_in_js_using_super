class Parent1{
    constructor(ele){
        this.element1=ele;
    }
    show(){
        return "This is "+ele;
    }
}
class Child1 extends Parent1{
    constructor(ele,mod){
        super(ele)
        this.mod=mod
    }
    display(){
        return "this is "+this.element1+" in "+this.mod;
    }
}

let myEle=new Child1("inheritance","ES6")
console.log(myEle.display())