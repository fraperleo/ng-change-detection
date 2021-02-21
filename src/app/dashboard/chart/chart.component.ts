import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnDestroy, AfterViewChecked {

  public counter: number;
  private interval;

  constructor(private _logger: LoggerService, private _ref: ChangeDetectorRef, private _ngZone: NgZone) {
    this.counter = 0;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this._logger.logAfterViewInit(ChartComponent.name);
  }

  public startCounter(): void {
    this._ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.counter++;
        this._ref.detectChanges();
      }, 3 *  1000);
    });
  }

  public stopCounter(): void {
    clearInterval(this.interval);
  }

  public check(): void {
    this._logger.logCheckHTML(ChartComponent.name);
  }

  ngOnDestroy() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }
}
