import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewChecked {

  public array: Event[];

  constructor(private _eventService: EventsService) {
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
      }, 2 * 1000);
    });
  }

  ngAfterViewChecked() {
    console.log('CD: List');
  }

  public reverse(): void {
    this.array = this.array.reverse();
  }
}
