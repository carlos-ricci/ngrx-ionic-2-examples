import {Component, ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {RedditModel} from '../../providers/reddit-model';
import {NavController} from 'ionic-angular';
import {
    SELECT_REDDIT
} from "../../reducers/reddit";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  constructor(public navCtrl: NavController, private _store: Store<any>, private redditModel: RedditModel) {

    redditModel.posts$.subscribe(
      (x) => {
        console.log('THIS IS THE POST$:');
        console.log(x);
      }
    );
    //this.redditPosts$ = reddit.fetchPosts('JoeInTransition');
  }

  selectReddit(reddit: string) {
    this._store.dispatch({type:SELECT_REDDIT, payload: reddit});
  }

  dale()
  {
      this._store.dispatch({type: SELECT_REDDIT, payload: 'Angular 2'});
  }

}
