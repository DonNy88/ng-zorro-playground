import { Component } from '@angular/core';

@Component({
  selector: 'ng-zorro-antd-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'client';
  numbers: number[];

  constructor() {
    this.numbers = Array(50)
      .fill(0)
      .map((_, i) => i);
  }
}
