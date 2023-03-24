import { Component, OnInit } from '@angular/core';
import { Dachshund } from './Entities/Dachshund';
import { Alabay } from './Entities/Alabay';
import { Dog } from './Entities/Dog';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page implements OnInit {

  Dogs: Dog[] = [];
  count: number = 10;
  constructor() { }

  getRandom(max: number){
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  ngOnInit() {
    this.CreateDogs();
    console.log(this.Dogs);
  }

  CreateDogs(){
    for(let i = 0; i<this.count; i++){
      this.Dogs.push(new Alabay("Алабай", this.getRandom(50), this.getRandom(200)));
      this.Dogs.push(new Dachshund("Такса", this.getRandom(20), this.getRandom(100)));
    }
    
    this.Dogs.forEach(dog => {
      dog.AmountOfFoodPerDay();
    });
  }

  getMinFoodAmount(): number {
    return Math.min(...this.Dogs.map(dog => dog.amountOfFood));
  }

}
