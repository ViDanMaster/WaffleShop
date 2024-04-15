import WaffleDecorator from "../WaffleDecorator";

class DarkChocolate extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 4;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " with dark chocolate"
    }   
}

export default DarkChocolate