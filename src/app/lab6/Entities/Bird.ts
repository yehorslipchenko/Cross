import { IFlyable } from "../Interfaces/IFlyable";
import { IWalkable } from "../Interfaces/IWalkable";
import { Animal } from "./Animal";

export class Bird extends Animal implements IWalkable, IFlyable{

    beak_color: string = "";
    constructor(override name: string, override speed: number, beak_color: string){
        super(name, speed);
        this.beak_color = beak_color;
    }

    fly(): string {
        return "I am bird, I can fly";
    }

    walk(): string {
       return "I am bird, I can walk";
    }

    override eat() {
        return "I am bird, I can eat";
    }
}