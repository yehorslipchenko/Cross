export abstract class Animal {
    name!: string;
    speed!: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }

    abstract eat() : any;
}