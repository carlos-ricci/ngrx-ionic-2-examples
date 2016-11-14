import {Action} from "@ngrx/store";

export interface RedditPosts {
    isFetching: boolean,
    didInvalidate?: boolean,
    posts: Array<any>,
    lastUpdated?: Date,
    selectedReddit?: string
}

export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

/**
 * This reducer states the new selectedReddit. Once this action is executed,
 * the effect "requestPost$" gets trigger (see class RedditEffects)
 */
export function selectedReddit(state : string = 'Angular 2', action: Action){
    switch(action.type) {
        case SELECT_REDDIT:
            return action.payload;
        default:
            return state;
    }
};