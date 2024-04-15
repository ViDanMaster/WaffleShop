import WaffleDecorator from "../WaffleDecorator";

class CaramelSauce extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 1;
    }
    getDescription(): string {
        return this.waffle.getDescription() + ", caramel sauce"
    }   
}

export default CaramelSauce