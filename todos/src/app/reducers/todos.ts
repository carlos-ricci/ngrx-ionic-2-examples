import {Action} from "@ngrx/store";
import {Todo} from "../common/interfaces";
import {ADD_TODO, REMOVE_TODO, SAVE_TODO} from "../common/actions";

export function todos  (state : Todo[] = [], action: Action) {
  switch(action.type) {
      case ADD_TODO:
          return [
              ...state,
              action.payload
          ];
      
      case REMOVE_TODO:

          return state.filter(todo => todo.id !== action.payload.id);
            
       case SAVE_TODO:
        return state.map( todo => {
            if(todo.id !== action.payload.id) {
                return todo;
            }
            return Object.assign({}, todo, action.payload);
        }); 
      default:
          return state;
  }
};

