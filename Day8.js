//date and time
let current=new Date("2025-08-08");
let day=current.getDay();
console.log(current)
console.log(current.toString());
console.log(day);

//class and constructor

class sample{
    constructor(personname){
        this.personname=personname;
        console.log(personname)
    }
}

let result=new sample("javascript")

// gettern and setter

class bank{
    constructor(initialAmount = 0){
        this._balance = initialAmount;
    }
    set balance(amount){
        if(amount>0){
            this._balance += amount
            console.log(amount)
        }
        
    }
        
}
let b=new bank(1000);
console.log(b);

b.balance=100;
console.log(b);