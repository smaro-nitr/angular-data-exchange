import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  serviceCounter: any = new BehaviorSubject(0);
  componentCounter = this.serviceCounter.asObservable();

  constructor() {  }

  increaseCounter(){
    this.serviceCounter._value = this.serviceCounter._value + 1;
    this.serviceCounter.next(this.serviceCounter._value)
  }
}
