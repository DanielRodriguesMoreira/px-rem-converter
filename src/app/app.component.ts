import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * The default pixel size.
   */
  defaultValue: number;

  /**
   * The selected tab index.
   */
  selectedTabIndex: number;

  /**
   * Indicates if is to show the configuration input.
   */
  showConfiguration: boolean;

  /**
   * The value to calculate.
   */
  value: number;

  /**
   * The calculated value followed by the correct unit.
   */
  get result(): number {
    if (this.value) {
      if (this.selectedTabIndex === 0) {
        return this.value / this.defaultValue;
      } else {
        return this.value * this.defaultValue;
      }
    }
    return 0;
  }

  get resultWithUnit(): string {
    if (this.selectedTabIndex === 0) {
      return `${this.result}rem`;
    } else {
      return `${this.result}px`;
    }
  }

  constructor() {
    this.defaultValue = 16;
    this.selectedTabIndex = 0;
    this.showConfiguration = false;
  }

  handleChange(event: any) {
    this.selectedTabIndex = event.index;
    this.showConfiguration = false;
  }
}
