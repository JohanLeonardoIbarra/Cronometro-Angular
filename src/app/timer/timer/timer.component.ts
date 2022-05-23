import { Component, OnInit } from '@angular/core';
import { Time } from '../../intefaces/time.interface';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {
  public time:Time = {
    mins: 0,
    segs: 0,
    ctm: 0
  }
  public start:boolean = false;
  initTimer(){
    this.start = !this.start;
  }

  resetTimer(){
    this.start = false;
    this.time.segs = 0;
    this.time.mins = 0;
    this.time.ctm = 0;
  }

  stopTimer(){
    let addTime:Time = {
      mins: this.time.mins,
      segs: this.time.segs,
      ctm: this.time.ctm
    };
    if(addTime.mins === 0 && addTime.segs === 0 && addTime.ctm === 0) return;
    this.historyService.addTime(addTime);
  }

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    setInterval(() =>{
      if(this.start){
        if(this.time.segs > 59){
          this.time.mins++;
          this.time.segs = 0;
        }
        if(this.time.ctm >= 99){
          this.time.segs++;
          this.time.ctm = 0;
        }else{
          this.time.ctm++;
        }
      }
    }, 10);
  }

}
