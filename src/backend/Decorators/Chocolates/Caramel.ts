import WaffleDecorator from "../WaffleDecorator";

class Caramel extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 3;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " with caramel"
    }   
}

export default Caramel