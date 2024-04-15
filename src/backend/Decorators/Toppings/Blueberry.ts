import WaffleDecorator from "../WaffleDecorator";

class Blueberry extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 4;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " and blueberry on top"
    }   
}

export default Blueberry