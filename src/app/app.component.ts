import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  public onIntervalFired(firedno: number) {
    if (firedno % 2) {
      this.oddNumber.push(firedno);
    } else {
      this.evenNumber.push(firedno);
    }

  }
}
