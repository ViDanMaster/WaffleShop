import Waffle from "../Interfaces/Waffle";

class GlutenFreeWaffle implements Waffle{
    getDescription(): string {
        return "Gluten-free waffle";
    }
    getPrice(): number {
        return 25;
    }
}

export default GlutenFreeWaffle