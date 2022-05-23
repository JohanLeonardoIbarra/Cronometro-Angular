import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { Time } from '../../intefaces/time.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  get history():Time[] {
    return this.historyService.history;
  }

  resetHistory():void {
    this.historyService.resetHistory();
  }

  constructor(private historyService: HistoryService) { }

}
