import { IWalkable } from "../Interfaces/IWalkable";
import { Animal } from "./Animal";

export class Mummal extends Animal implements IWalkable{

    milk_temprature: number = 0;
    constructor(override name: string, override speed: number, milk_temprature: number){
        super(name, speed);
        this.milk_temprature = milk_temprature;
    }

    walk(): string {
        return "I am Mummal, I can walk";
    }

    override eat() {
        return "I am Mummal, I can eat";
    }
}