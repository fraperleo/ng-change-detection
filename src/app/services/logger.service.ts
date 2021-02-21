import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public logAfterViewInit(componentName: string): void {
    // console.log(`CD: ${componentName}`);
  }

  public logCheckHTML(componentName: string): void {
    console.log(`Checked: ${componentName}`);
  }
}
