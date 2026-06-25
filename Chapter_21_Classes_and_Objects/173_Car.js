class Car{

    constructor (name, model, price, color){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color
    }
    drive(){
        console.log("Car is driving at perfect speed")
    }
    refuel(){
        console.log("Car is refueled")
    
    }
}
let C1 = new Car("Safari", "TATA", 1500000, "Black")
let C2 = new Car("Swift Dezire","Maruti", 1000000, "Red")

console.log(C1.name)
console.log(C1.model)
console.log(C1.price)
console.log(C1.color)
C1.drive()
C1.refuel()

console.log("-----------------------")

console.log(C2.name)
console.log(C2.model)
console.log(C2.price)
console.log(C2.color)