import {Component, ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {NavController} from 'ionic-angular';
import {Reddit} from '../../providers/reddit';
import {Observable} from "rxjs/Observable";
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_REDDIT
} from "../../reducers/reddit";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public redditPosts$: Observable<any>;

  constructor(public navCtrl: NavController, private _store: Store<any>, private reddit:Reddit) {
    this.redditPosts$ = reddit.fetchPosts('JoeInTransition');
  }


  dale()
  {
      this._store.dispatch({type: SELECT_REDDIT, payload: 'Angular 2'});
  }

}
