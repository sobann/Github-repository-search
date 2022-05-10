export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_ERROR = 'GET_REPOS_ERROR';
export const GET_COMMITS_SUCCESS = 'GET_COMMITS_SUCCESS';
export const GET_COMMITS_ERROR = 'GET_COMMITS_ERROR';
export const RESET_STATE = 'RESET_STATE';

export const getUser = (user:string) => (dispatch:any) => {
  fetch(`https://api.github.com/users/${user}`)
  .then(res => res.json())
  .then(data => {
    if(data.id) dispatch({type: GET_USER_SUCCESS, payload: data})
    else dispatch({type: GET_USER_ERROR, payload: data.message});
    
  })
  .catch(err => {
    dispatch({type: GET_USER_ERROR, payload: err});
  })
}

export const getRepos = (login:any) => (dispatch:any) => {
  fetch(`https://api.github.com/users/${login}/repos`)
  .then(res => res.json())
  .then(data => {
    if(data.length > 0) dispatch({type: GET_REPOS_SUCCESS, payload: data});
    else dispatch({type: GET_REPOS_ERROR, payload: data.message});
  })
  .catch(err => {
    dispatch({type: GET_REPOS_ERROR, payload: err});
  })
}

export const getCommits = (name:string, login: string) => (dispatch:any) => {
  fetch(`https://api.github.com/repos/${login}/${name}/commits`)
  .then(res => res.json())
  .then(data => {
    if(data.length > 0) dispatch({type: GET_COMMITS_SUCCESS, payload: {name: name, data: data}});
    else dispatch({type: GET_COMMITS_ERROR, payload: data.message});
  })
  .catch(err => {
    dispatch({type: GET_REPOS_ERROR, payload: err});
  })
}
export const resetState = () => ({
  type: RESET_STATE, 
});