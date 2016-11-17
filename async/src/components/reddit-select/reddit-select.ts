import { Component, Output, EventEmitter } from "@angular/core";

/*
  Generated class for the RedditSelect component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'reddit-select',
  templateUrl: 'reddit-select.html'
})
export class RedditSelectComponent {

  @Output() redditSelect: EventEmitter<string> = new EventEmitter<string>();
  availableReddits: [string] = ["Angular 2", "ReactJS"];

  ngOnInit() {
    this.redditSelect.emit(this.availableReddits[0]);
  }

}
