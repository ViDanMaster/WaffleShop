import WaffleDecorator from "../WaffleDecorator";

class RaspberrySauce extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 2;
    }
    getDescription(): string {
        return this.waffle.getDescription() + ", raspberry sauce"
    }   
}

export default RaspberrySauce