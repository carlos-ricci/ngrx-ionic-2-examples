/*
    Default parameter will be used for initial state unless initial
    state is provided for this reducer in 'provideStore' method.
*/

/*
import {ActionReducer, Action} from "@ngrx/store";
export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};


Substituted the declaration as a lambda function by this declaration below of the function that 
matches the interface ActionReducer to avoid the error from the ngc compiler:

 Error: Error encountered resolving symbol values statically. Function calls are not supported.
        Consider replacing the function or lambda with a reference to an exported function
*/
import {Action} from "@ngrx/store";

export function counterReducer (state: number = 0, action: Action)  {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};


