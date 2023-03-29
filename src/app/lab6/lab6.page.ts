import { Component, OnInit } from '@angular/core';
import { Animal } from './Entities/Animal';
import { Artiodactyl } from './Entities/Artiodactyl';
import { Bird } from './Entities/Bird';
import { Mummal } from './Entities/Mummal';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page implements OnInit {

  Animals: Animal[] = [];
  count: number = 5;
  constructor() { }

  getRandom(max: number){
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  ngOnInit() {
    this.CreateAnimals();
  }

  CreateAnimals(){
    for(let i = 0; i<this.count; i++){
      this.Animals.push(new Bird("Птиця", this.getRandom(50), "Grey"));
      this.Animals.push(new Artiodactyl("Парнокопитне", this.getRandom(20), "Good"));
      this.Animals.push(new Mummal("Ссавець", this.getRandom(20), this.getRandom(30)));
    }
    
  }

}
