import Waffle from "../Interfaces/Waffle";

class NormalWaffle implements Waffle{
    getDescription(): string {
        return "Normal waffle";
    }
    getPrice(): number {
        return 15;
    }
}

export default NormalWaffle