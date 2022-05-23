import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    TimerComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerComponent,
    HistoryComponent
  ]
})
export class TimerModule { }
