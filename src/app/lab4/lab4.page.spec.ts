import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Alabay } from './Entities/Alabay';
import { Dachshund } from './Entities/Dachshund';

import { Lab4Page } from './lab4.page';

describe('Lab4Page', () => {
  let component: Lab4Page;
  let fixture: ComponentFixture<Lab4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('AlabayTesting', () => {
  let dog: Alabay

  beforeEach(() => 
  {
    dog = new Alabay("Алабай", 50, 180);
  });

  it("Створення екземпляру классу", () => 
  {
    expect(dog).toBeTruthy();
  })
});

describe('AlabayFoodCalculationTesting', () => {
  let dog: Alabay;

  beforeEach(() => 
  {
    dog = new Alabay("Алабай", 50, 180);
    dog.AmountOfFoodPerDay();
  });

  let foodNeeded = 0.8 * 50 * 180;

  it("Підрахунок кількості їжі Алабай", () => 
  {
    expect(dog.amountOfFood).toBe(foodNeeded);
  });
});

describe('DachshundTesting', () => {
  let dog: Dachshund

  beforeEach(() => 
  {
    dog = new Dachshund("Такса", 50, 180);
  });

  it("Створення екземпляру классу", () => 
  {
    expect(dog).toBeTruthy();
  })
});

describe ("DachshundFoodCalculationTesting", () => 
{
  let dog: Dachshund;
   beforeEach(()=>
   {
    dog = new Dachshund("Такса", 10, 120);
    dog.AmountOfFoodPerDay();
   });

   let foodNeeded = 120 * 0.1;

  it("Підрахунок кількості їжі Такса", () => 
  {
    expect(dog.amountOfFood).toBe(foodNeeded);
  });
});