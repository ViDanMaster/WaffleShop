import Waffle from "../Interfaces/Waffle";

class BubbleWaffle implements Waffle{
    getDescription(): string {
        return "Bubble waffle";
    }
    getPrice(): number {
        return 20;
    }
}

export default BubbleWaffle