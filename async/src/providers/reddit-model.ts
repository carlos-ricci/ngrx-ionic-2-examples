import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {RedditPosts} from "../reducers/reddit";
import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/share";

@Injectable()
export class RedditModel{
    public selectedReddit$ : Observable<string>;
    public posts$ : Observable<Array<any>>;
    public isFetching$: Observable<boolean>;
    public lastUpdated$: Observable<Date>;

    constructor(
        private store: Store<any>
    ){
        
        /*

        export interface RedditPosts {
    isFetching: boolean,
    didInvalidate?: boolean,
    posts: Array<any>,
    lastUpdated?: Date,
    selectedReddit?: string
}
 */       
        
        const model$ = 
        store.select('postsByReddit')
        .combineLatest(
            store.select('selectedReddit'),
            (postsByReddit : Array<any>, selectedReddit : string) => {
                const {
                    isFetching,
                    lastUpdated,
                    posts
                } : RedditPosts = postsByReddit[selectedReddit] || {
                    isFetching: true,
                    posts: []
                };

                return {
                    selectedReddit,
                    posts,
                    isFetching,
                    lastUpdated
                }
            }
        ).share();
        //expose to view
        this.selectedReddit$ = model$.map(vm => vm.selectedReddit);
        this.posts$ = model$.map(vm => vm.posts);
        this.isFetching$ = model$.map(vm => vm.isFetching);
        this.lastUpdated$ = model$.map(vm => vm.lastUpdated);
    }
}