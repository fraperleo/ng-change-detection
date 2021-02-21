import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, AfterViewChecked {

  @Input() critic: number;

  constructor(private _logger: LoggerService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this._logger.logAfterViewInit(ListItemComponent.name);
  }

  public check(): void {
    this._logger.logCheckHTML(ListItemComponent.name);
  }

}
