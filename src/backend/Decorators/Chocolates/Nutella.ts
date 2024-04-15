import WaffleDecorator from "../WaffleDecorator";

class Nutella extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 6;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " with nutella"
    }   
}

export default Nutella