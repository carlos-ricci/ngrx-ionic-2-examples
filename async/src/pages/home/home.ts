import {Component, ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {RedditModel} from '../../providers/reddit-model';
import {NavController} from 'ionic-angular';
import {
    SELECT_REDDIT, INVALIDATE_REDDIT
} from "../../reducers/reddit";
import {Logger} from '../../providers/logger'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  constructor(public navCtrl: NavController, private _store: Store<any>, public redditModel: RedditModel, private _logger: Logger) {
  }

  selectReddit(reddit: string) {
    this._logger.log("User selected reddit: " + reddit);
    this._store.dispatch({type:SELECT_REDDIT, payload: reddit});
  }

  invalidateReddit(reddit : string){
        this._store.dispatch({type: INVALIDATE_REDDIT, payload: {reddit}});
        this._store.dispatch({type: SELECT_REDDIT, payload: reddit});
  }

}
