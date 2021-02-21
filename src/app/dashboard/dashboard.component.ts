import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked {

  public color: boolean;

  constructor(private _logger: LoggerService) {
    this.color = true;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this._logger.logAfterViewInit(DashboardComponent.name);
  }

  public changeColor(): void {
    this.color = !this.color;
  }

  public check(): void {
    this._logger.logCheckHTML(DashboardComponent.name);
  }
}
