import WaffleDecorator from "../WaffleDecorator";

class Banana extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 2;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " and banana on top"
    }   
}

export default Banana