export abstract class Dog {
    Breed!: string;
    M!: number;
    amountOfFood!: number;
    Length!: number;
    constructor(Breed: string, M: number, Length: number){
        this.Breed = Breed;
        this.M = M;
        this.Length = Length;
    }

    abstract AmountOfFoodPerDay() : any;
}