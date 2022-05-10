import React, { FC, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { saveFactorial } from '../../redux/factorial/actions';

import './style.scss';
export const Factorial: FC = () => {

  const dispatch = useDispatch();
  const history = useSelector((state:any) => state.factorialHistory.history);

  const numerInputRef = useRef<HTMLInputElement | null>(null);
  const [factorialResult, setFactorialResult] = useState<number>(0);

  const handleCalculateFactorial = () => {
    const { current } = numerInputRef;

    if(!current!.value || Number(current!.value) === 0) return;
    const inputNumber = Number(current!.value);

    let resultFactorial = 1;
    for(let i = 1; i <= inputNumber; ++i){
      if(inputNumber !== 1) resultFactorial = resultFactorial * i;
    }

    setFactorialResult(resultFactorial);
    dispatch<any>(saveFactorial({ result: resultFactorial, factorial: inputNumber}))
  }

  return(
    <>
      <div className="factorial__wrapper">
        <h2>Type count to calculate</h2>
        <input ref={numerInputRef} type="number" />
        <button className="btn btn--search ml-10" onClick={handleCalculateFactorial}>Calculate</button>
        <h2 style={{height: '30px'}}>
          {factorialResult > 0 ? `! ${numerInputRef.current!.value} = ${ factorialResult }` : ''}
        </h2>

        <div className="factorial__history">
          <h2>Calculate history</h2>
          {history.length > 0 && history.map(({ factorial, result }:any, index:number,) => {
            return (
              <React.Fragment key={index*result}>
                <p>!{factorial} = { result }</p>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}