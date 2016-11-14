import {Component, Input} from '@angular/core';
import {RedditPosts} from "../../reducers/reddit";


/*
  Generated class for the RedditList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'reddit-list',
  templateUrl: 'reddit-list.html'
})
export class RedditListComponent {

  @Input()
  posts: RedditPosts[];
  @Input()
  isFetching: boolean;

  constructor() {
  }

  

}
