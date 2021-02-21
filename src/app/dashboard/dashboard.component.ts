import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked {

  public color: boolean;

  constructor() {
    this.color = true;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log('CD: Dashboard');
  }

  public changeColor(): void {
    this.color = !this.color;
  }

  public check(): void {
    console.log('Checked: Dashboard')
  }
}
