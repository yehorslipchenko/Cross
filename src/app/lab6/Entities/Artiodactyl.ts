import { IWalkable } from "../Interfaces/IWalkable";
import { Animal } from "./Animal";

export class Artiodactyl extends Animal implements IWalkable{ 

    hoof_condition: string = "";
    constructor(override name: string, override speed: number, hoof_condition: string){
        super(name, speed);
        this.hoof_condition = hoof_condition;
    }

    walk(): string {
        return "I am Artiodactyl, I can walk";
    }

    override eat() {
        return "I am Artiodactyl, I can eat";
    }
}