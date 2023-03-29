import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Artiodactyl } from './Entities/Artiodactyl';
import { Bird } from './Entities/Bird';
import { Mummal } from './Entities/Mummal';

import { Lab6Page } from './lab6.page';

describe('Lab6Page', () => {
  let component: Lab6Page;
  let fixture: ComponentFixture<Lab6Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ArtiodactylCreateTest', () => {
  let animal: Artiodactyl

  beforeEach(() => 
  {
    animal = new Artiodactyl("Artiodactyl", 50, "good");
  });

  it("Створення екземпляру классу", () => 
  {
    expect(animal).toBeTruthy();
  })
});

describe('BirdCreateTest', () => {
  let animal: Bird

  beforeEach(() => 
  {
    animal = new Bird("Bird", 50, "grey");
  });

  it("Створення екземпляру классу", () => 
  {
    expect(animal).toBeTruthy();
  })
});

describe('MummalCreateTest', () => {
  let animal: Mummal

  beforeEach(() => 
  {
    animal = new Mummal("Mummal", 50, 30);
  });

  it("Створення екземпляру классу", () => 
  {
    expect(animal).toBeTruthy();
  })
});






describe('ArtiodactylEatTest', () => {
  let animal: Artiodactyl
  let expected: string = "I am Artiodactyl, I can eat"

  beforeEach(() => 
  {
    animal = new Artiodactyl("Artiodactyl", 50, "good");
  });

  it("ArtiodactylEat", () => 
  {
    expect(animal.eat()).toBe(expected);
  })
});

describe('BirdEatTest', () => {
  let animal: Bird
  let expected: string = "I am bird, I can eat"

  beforeEach(() => 
  {
    animal = new Bird("Bird", 50, "grey");
  });

  it("BirdEat", () => 
  {
    expect(animal.eat()).toBe(expected);
  })
});

describe('MummalEatTest', () => {
  let animal: Mummal
  let expected: string = "I am Mummal, I can eat"

  beforeEach(() => 
  {
    animal = new Mummal("Mummal", 50, 30);
  });

  it("MummalEat", () => 
  {
    expect(animal.eat()).toBe(expected);
  })
});






describe('ArtiodactylWalkTest', () => {
  let animal: Artiodactyl
  let expected: string = "I am Artiodactyl, I can walk"

  beforeEach(() => 
  {
    animal = new Artiodactyl("Artiodactyl", 50, "good");
  });

  it("ArtiodactylWalk", () => 
  {
    expect(animal.walk()).toBe(expected);
  })
});

describe('BirdWalkTest', () => {
  let animal: Bird
  let expected: string = "I am bird, I can walk"

  beforeEach(() => 
  {
    animal = new Bird("Bird", 50, "grey");
  });

  it("BirdWalk", () => 
  {
    expect(animal.walk()).toBe(expected);
  })
});

describe('MummalWalkTest', () => {
  let animal: Mummal
  let expected: string = "I am Mummal, I can walk"

  beforeEach(() => 
  {
    animal = new Mummal("Mummal", 50, 30);
  });

  it("MummalWalk", () => 
  {
    expect(animal.walk()).toBe(expected);
  })
});





describe('BirdFlyTest', () => {
  let animal: Bird
  let expected: string = "I am bird, I can fly"

  beforeEach(() => 
  {
    animal = new Bird("Bird", 50, "grey");
  });

  it("BirdFly", () => 
  {
    expect(animal.fly()).toBe(expected);
  })
});