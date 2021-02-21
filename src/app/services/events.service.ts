import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from '../shared/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private id = 3;

  private subject: Subject<Event>;
  private observable: Observable<Event>;

  constructor() {
    this.subject = new Subject<Event>();
    this.observable = this.subject.asObservable();

    setInterval(() => {
      const event = this.generateEvent();
      console.log('Event generated every 30 seconds');
      this.subject.next(event);
    }, 30 * 1000);
  }

  public getEvents(): Observable<Event> {
    return this.observable;
  }

  private generateEvent(): Event {
    this.id++;
    return {
      id: this.id,
      name: `name${this.id}`,
      critic: this.id
    };
  }
}
