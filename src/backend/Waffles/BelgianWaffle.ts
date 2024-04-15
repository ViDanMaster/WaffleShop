import Waffle from "../Interfaces/Waffle";

class BelgianWaffle implements Waffle{
    getDescription(): string {
        return "Belgian waffle";
    }
    getPrice(): number {
        return 22;
    }
}

export default BelgianWaffle