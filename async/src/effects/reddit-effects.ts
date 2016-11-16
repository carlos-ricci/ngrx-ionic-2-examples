import { Injectable } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/do";
import "rxjs/add/operator/withLatestFrom";


import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_REDDIT
} from "../reducers/reddit";

import {Reddit} from "../providers/reddit";

@Injectable()
export class RedditEffects {

    constructor(
        private _actions$: Actions,
        private _reddit: Reddit,
        private _store: Store<any>
    ) {
        
     }

     // Observable to the state of the store
     private store$ = this._store.select('postsByReddit');


    @Effect() requestPosts$ = this._actions$
        .ofType(SELECT_REDDIT)
        .withLatestFrom(this.store$)
        .filter(([action,state]) => this.shouldFetchPosts(state,action.payload))
        .map( (result) =>  ({type: REQUEST_POSTS, payload: {reddit: result[0].payload}}));


    private shouldFetchPosts(state, reddit) {
        if(!state.postsByReddit) {
            return true;
        }
        const posts = state.postsByReddit[reddit];
        if (!posts) {
            return true;
        }
        if (posts.isFetching) {
            return false;
        }
        return posts.didInvalidate;
    }


}
