import { Dog } from "./Dog";

export class Dachshund extends Dog{

    constructor(override Breed: string, override M: number, Length: number){
        super(Breed, M, Length);
    }

    override AmountOfFoodPerDay() {
        this.amountOfFood = this.Length * (1/this.M);
    }
}