import WaffleDecorator from "../WaffleDecorator";

class StrawberrySauce extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 2;
    }
    getDescription(): string {
        return this.waffle.getDescription() + ", strawberry sauce"
    }   
}

export default StrawberrySauce