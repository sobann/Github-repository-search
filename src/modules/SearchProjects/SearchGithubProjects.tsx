import React, { FC, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser, getRepos, getCommits, resetState } from '../../redux/searchProjects/actions';

import './style.scss';

export const SearchGithubProjects: FC = () => {

  const dispatch = useDispatch();
  const searchProjects = useSelector((state:any) => state.searchProjects);

  const personData = searchProjects.personData;
  const commits = searchProjects.commits;
  const searchProjectsError = searchProjects.error;
  const personDataRepos = searchProjects.repositories;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchGithubPerson = () => {
    const { current } = inputRef
    if(!current!.value) return;
    dispatch<any>(resetState());
    dispatch<any>(getUser(current!.value));
  }

  useEffect(() => {
    if(Object.keys(personData).length === 0 || personDataRepos.length > 0) return;
      dispatch<any>(getRepos(personData.login))
  }, [personData])

  const ShowPersonRepos = () => {
    if(!personDataRepos.length) return null;
    const sortLastupdated = personDataRepos.sort((a:any, b:any) => {
      let olderDate = new Date(a.updated_at).getTime();
      let newDate = new Date(b.updated_at).getTime();
      return newDate - olderDate
    })

    let repositoryList = sortLastupdated.filter((repos:any,index:number) => index < 5).map((repo:any) => {
      return(
        <React.Fragment key={repo.name}>
          <li onClick={() => handleGetCommits(repo.name)}>{repo.name} - <i>Show details</i></li>
        </React.Fragment>
      )
    });
    
    return (
      <ul>{repositoryList}</ul>
    )
  }

  const handleGetCommits = (name:string) => {
    dispatch<any>(getCommits(name, personData.login))
  }

  return(
    <>
      <div className="project__wrapper">
        <div className="project__wrapper__search">
          {searchProjectsError && <p className="error-info">{searchProjectsError}</p>}
          <input
            ref={inputRef}
            placeholder="Search or jump to..."
            type="text" 
          />
          <button onClick={handleSearchGithubPerson} type="button" className="btn btn--search ml-10">Search</button>
          {personData && <div className="project__wrapper__person">
            <img alt={personData.name} src={personData.avatar_url} />
            <div className="project__wrapper__person__content">
              <h2>{personData.name ? personData.name + ' / ' : ''} {personData.login}</h2>
              {personData.bio && <p>{personData.bio}</p>}
            </div>
          </div>}

          {personDataRepos.length > 0 && 
            <div className="project__wrapper__repositories">
              <h3>Repositories</h3>
              <ShowPersonRepos/>
            </div>
          }
          
        </div>
        {commits.data.length > 0 && <div className="project__wrapper__search commits__wrapper">
          <h2 className="commits__wrapper__repo__name">Repository: { commits.name }</h2>
          {commits.data.filter((commit:any,index:number) => index < 5).map(({ author, commit, html_url}:any) => {
            const { avatar_url = '', login = '' } = author || {};
            const { date = '', name = '' } = commit.author || {};

            const commitDate = new Date(Date.parse(date));
            const dateFormat = (commitDate.getMonth() + 1 < 10 ? `0${commitDate.getMonth() + 1}` : commitDate.getMonth() + 1 ) + '/' + commitDate.getDate() + '/' +commitDate.getFullYear()
            return (
              <div key={date} className="commits__wrapper__single">
                <div className="commits__wrapper__single--image">
                  <img src={avatar_url} alt={login} />
                </div>
                <div className="commits__wrapper__single--content">
                  <p>Author: { name }</p>
                  <p>Message: { commit.message }</p>
                  <p><a target="_blank" rel="noreferrer" href={html_url}>Go to commit</a></p>
                  <p>Date: { dateFormat }</p>
                </div>
              </div>  
            )
          })}
        </div>}
      </div>
    </>
  )
}