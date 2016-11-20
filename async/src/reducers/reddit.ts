import {Action, ActionReducer} from "@ngrx/store";
import {Injector, ReflectiveInjector} from '@angular/core'
import {Logger, loggerFactory} from '../providers/logger';
import {CONFIG} from '../config/config' 

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


// Inject a logger
let injector: Injector = ReflectiveInjector.resolveAndCreate([{ provide: Logger, useFactory: loggerFactory(CONFIG.logger)}]);
let _logger = injector.get(Logger);

/**
 * This reducer states the new selectedReddit. Once this action is executed,
 * the effect "requestPost$" gets trigger (see class RedditEffects)
 */
export function selectedReddit(state : string = 'Angular 2', action: Action){
    switch(action.type) {
        case SELECT_REDDIT:
            _logger.log("Entering Reducer: selectedReddit", action);
            return action.payload;
        default:
            return state;
    }
};

const posts : ActionReducer<RedditPosts> = (state : RedditPosts = {
    isFetching: false,
    didInvalidate: false,
    posts: []
}, action: Action) => {
  
  switch(action.type) {
                  
      case INVALIDATE_REDDIT:
        _logger.log("Entering function posts: Action: INVALIDATE", action );
          return Object.assign({}, state, {
              didInvalidate: true
          });
      case REQUEST_POSTS:
        _logger.log("Entering function posts: Action: REQUEST", action );
          return Object.assign({}, state, {
              isFetching: true,
              didInvalidate: false
          });
      case RECEIVE_POSTS:
          //console.log("Posts received");
          //console.log(action.payload.data.children.map(child => child.data));
            _logger.log("Entering function posts: Action: RECEIVE", action );
          return Object.assign({}, state, {
              isFetching: false,
              didInvalidate: false,
              posts: action.payload.data.children.map(child => child.data),
              lastUpdated: Date.now()
          });
      default:
          return state;
  }
};


export function postsByReddit(state: {} = {}, action : Action) {
    
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
           _logger.log("Entering Reducer: postsByReddit, Action: INVALIDATE, RECEIVE OR REQUEST", action);
           //console.log("reducer postsByReddit. See Payload below");
           //console.log(action.payload);
           const newState = Object.assign({}, state, {
                [action.payload.reddit]: posts(state[action.payload.reddit], action)});
            
            _logger.log("New State", newState);
           //console.log("reducer will return as follows:");
           //console.log(newState);     
           return newState;       
        default:
            return state;
    }
};