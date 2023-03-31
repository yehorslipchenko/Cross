import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  Log(message: string){
    console.log(message);
  }

  constructor() { }
}
