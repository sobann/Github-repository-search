import {
  SAVE_FACTORIAL_SUCCESS,
} from './actions';

interface InitStateFactorial {
  history: [],
}

const initStateFactorial:InitStateFactorial = {
  history: []
}

export const factorialHistory = (state = initStateFactorial, action:any) => {
  const { payload } = action;
  switch(action.type){
    case SAVE_FACTORIAL_SUCCESS:
      return {
        ...state,
        history: [...state.history, payload]
      };
    default: 
      return state;
  }
}