const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SPEND_CALCULATION': 
      return {
        ...state,
        result: action.payload
      }
    default:
      return state;
  }
}

export default GlobalReducer;