const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SPEND_CALCULATION': 
      return {
        ...state,
        result: action.payload,
        isResult: true
      }
    case 'RESET_CALCULATION': 
      return {
        ...action.payload
      }
    default:
      return state;
  }
}

export default GlobalReducer;