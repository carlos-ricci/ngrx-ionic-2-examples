import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

/*
  Generated class for the RefreshButton component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'refresh-button',
  templateUrl: 'refresh-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshButtonComponent {

@Input() selectedReddit : string;
@Output() invalidateReddit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

}
