const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SPEND_CALCULATION': 
      return {
        ...state,
        result: action.payload,
        isResult: true
      }
    default:
      return state;
  }
}

export default GlobalReducer;