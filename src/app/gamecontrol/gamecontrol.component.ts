import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.scss'
})
export class GamecontrolComponent {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  no: number = 0;
  public onStart(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.no + 1);
      this.no++;

    }, 1000)
  }
  public onEnd(): void {
    clearInterval(this.interval);

  }

}
