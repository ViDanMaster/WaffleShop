import WaffleDecorator from "../WaffleDecorator";

class Apple extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 2;
    }
    getDescription(): string {
        return this.waffle.getDescription() + " and apple on top"
    }   
}

export default Apple