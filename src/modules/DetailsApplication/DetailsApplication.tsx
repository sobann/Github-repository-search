import React, { FC } from 'react';

import { assumptions, tasks } from './Data';
import './style.scss';

export const DetailsApplication: FC = () => {

  const AssumptionsList = () => {
    let lists = assumptions.map(({ title, requireds }:any) => {
      return (
        <React.Fragment key={title}>
          <h2>{title}</h2>
          <ol className="assumptions-list">
            {requireds.map(({ taskName }:any) => {
              return (
                <React.Fragment key={taskName}>
                  <li>{ taskName }</li>
                </React.Fragment>
              )
            })}
          </ol>
        </React.Fragment>
      )
    })

    return(
      <>{ lists }</>
    );
  }

  const TasksList = () => {
    let tasksList = tasks.map((task, index:number) => {
      return (
        <div key={`task${index}`} className='single__task'>
          <p>Ad { index + 1}</p>
          <ol>
            {task.map(({ name, subtasks }:any) => {
              let subTasks;
              if(subtasks){
                subTasks = subtasks.map(({ name }:any) => {
                  return (
                    <React.Fragment key={name}>
                      <li>{ name }</li>
                    </React.Fragment>
                  )
                })
              }
              return (
                <React.Fragment key={name}>
                  <li>{ name }</li>
                  <ol>{ subTasks }</ol>
                </React.Fragment>
              )
            })}
          </ol>
        </div>
      )
    })

    return (
      <div className="tasks__list">
        {tasksList}
      </div>
    )
  }

  return(
    <div className="tasklist">
      <h1>Napisz aplikację korzystając z najnowszego api react.js (hooki, Context, itd.) spełniającą poniższe założenia.</h1>
      <AssumptionsList/>
      <TasksList/>
    </div>
  )
}