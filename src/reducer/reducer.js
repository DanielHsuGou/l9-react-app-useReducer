// define your state finally looks

export function sampleReducer(state, action) {
  console.log("action", action);
  const { count } = state;

  switch (action.type) {
    case "INCREASE":
      return { ...state, count: count + 1 };
    case "DECREASE":
      return { ...state, count: count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}

// ...state => copy whole & modify specified
// not don't have => mess up
