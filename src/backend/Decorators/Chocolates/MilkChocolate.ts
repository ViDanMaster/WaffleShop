import WaffleDecorator from "../WaffleDecorator";

class MilkChocolate extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 5;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " with milk chocolate"
    }   
}

export default MilkChocolate