import WaffleDecorator from "../WaffleDecorator";

class CholocateSauce extends WaffleDecorator{

    getPrice(): number {
        return this.waffle.getPrice()  + 1.5;
    }
    getDescription(): string {
        return this.waffle.getDescription() + ", cholocate sauce"
    }   
}

export default CholocateSauce