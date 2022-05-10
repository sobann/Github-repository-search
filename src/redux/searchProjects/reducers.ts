import {
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_REPOS_SUCCESS,
  GET_REPOS_ERROR,
  GET_COMMITS_SUCCESS,
  GET_COMMITS_ERROR,
  RESET_STATE
} from './actions';

interface InitState {
  personData: {},
  repositories: [],
  commits: {
    name:string, data: []
  }
  error: string
}

const initState:InitState = {
  personData: {},
  repositories: [],
  commits: {
    name: '', data: []
  },
  error: '',
}

export const searchProjects = (state = initState, action:any) => {
  const { payload } = action;
  switch(action.type){
    case GET_USER_SUCCESS:
      return {
        ...state,
        personData: payload,
        error: ''
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repositories: payload,
        error: ''
      };
    case GET_COMMITS_SUCCESS:
      return {
        ...state,
        commits: {name: payload.name, data: payload.data},
        error: ''
      };
    case RESET_STATE:
      return initState;
    case GET_USER_ERROR:
    case GET_REPOS_ERROR:
      return {
        ...state,
        error: payload
      };
    case GET_COMMITS_ERROR:
      return {
        ...state,
        commits: initState.commits,
        error: payload
      };
    default: 
      return state;
  }
}