import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, AfterViewChecked {

  public array: Event[];

  constructor(private _eventService: EventsService, private _logger: LoggerService, private _ref: ChangeDetectorRef) {
    this.array = [
      {id: 0, name: 'name0', critic: 0},
      {id: 1, name: 'name1', critic: 1},
      {id: 2, name: 'name2', critic: 2},
      {id: 3, name: 'name3', critic: 3}
    ]
  }

  ngOnInit() {
    this._eventService.getEvents().subscribe(elem => {
      setTimeout(() => {
        this.array.push(elem);
        console.log('Adding subscribe emitted 2 secons ago');
        this._ref.detectChanges();
      }, 2 * 1000);
    });
  }

  ngAfterViewChecked() {
    this._logger.logAfterViewInit(ListComponent.name);
  }

  public check(): void {
    this._logger.logCheckHTML(ListComponent.name);
  }

  public reverse(): void {
    this.array = this.array.reverse();
  }

  public itemByID(index: number, item: Event) {
    return item.id;
  }
}
