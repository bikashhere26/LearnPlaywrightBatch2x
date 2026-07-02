class Person{

    #ch1;
    #ch2;

    constructor(name, ch1, ch2){
        this.name = name;
        this.#ch1 = ch1;
        this.#ch2 = ch2;
        
    }
getchild(){
    return this.#ch1 + " " + this.#ch2;
}
setchild(ch1, ch2){
    this.#ch1 = ch1;
    this.#ch2 = ch2;
}
}
const p1 = new Person("Bikash", "Aditya", "Pihu");

    p1.getchild();
    console.log(p1.getchild());

    p1.setchild("Duggu", "Ruhi");
    console.log(p1.getchild());

    console.log(p1.getchild());
    console.log(p1.name);

