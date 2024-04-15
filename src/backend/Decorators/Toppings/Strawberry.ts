import WaffleDecorator from "../WaffleDecorator";

class Strawberry extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 3;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " and strawberry on top"
    }   
}

export default Strawberry