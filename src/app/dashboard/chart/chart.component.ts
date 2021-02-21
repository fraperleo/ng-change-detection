import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy, AfterViewChecked {

  public counter: number;
  private interval;

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log('CD: Chart');
  }

  public startCounter(): void {
    this.interval = setInterval(() => {
      this.counter++;
    }, 3 *  1000);
  }

  public stopCounter(): void {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }
}
