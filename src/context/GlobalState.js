import React, { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import GlobalReducer from './GlobalReducer';

const GlobalState = ({children}) => {
  const initialGlobalStore = {
    result: {},
    physicalActivity: {
      min: 1.2,
      low: 1.375,
      medium: 1.55,
      high: 1.725,
      max: 1.9
    }
  }

  const [globalState, globalDispatch] = useReducer(GlobalReducer, initialGlobalStore);
 
  const calculationOfCalories = (userData) => {
    const result = {};
    let basicСalculation;
    
    if (userData.gender === 'male') {
      basicСalculation = ((10 * +userData.weight) + (6.25 * +userData.height) - (5 * +userData.age) + 5) * globalState.physicalActivity[userData.activity];
    
    } else if (userData.gender === 'female') {
      basicСalculation = ((10 * +userData.weight) + (6.25 * +userData.height) - (5 * +userData.age) - 161) * globalState.physicalActivity[userData.activity];
    
    }

    result.retention = Math.round(basicСalculation);
    result.increase = Math.round(basicСalculation * 1.15);
    result.decrease = Math.round(basicСalculation * 0.75);

    globalDispatch({
      type: 'SPEND_CALCULATION',
      payload: result
    })
  }
  console.log(globalState)
  return (
    <GlobalContext.Provider value={{globalState, calculationOfCalories}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;