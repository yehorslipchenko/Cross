import { Dog } from "./Dog";

export class Alabay extends Dog{

    constructor(override Breed: string, override M: number, Length: number){
        super(Breed, M, Length);
    }

    override AmountOfFoodPerDay() {
        this.amountOfFood = 0.8 * this.M * this.Length;
    }
}