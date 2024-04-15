import Waffle from "../Interfaces/Waffle";

abstract class WaffleDecorator implements Waffle {
    constructor(protected waffle: Waffle) {}

    abstract getDescription(): string;
    abstract getPrice(): number;
  }
export default WaffleDecorator