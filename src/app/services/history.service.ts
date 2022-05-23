import { Injectable } from '@angular/core';
import { Time } from '../intefaces/time.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _history:Time[] = [];

  get history():Time[] {
    return [...this._history];
  }

  addTime(time:Time){
    this._history.push(time);
  }

  resetHistory(){
    this._history = [];
  }

  constructor() { }
}
