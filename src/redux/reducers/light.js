const initialCount = false;

function light(state = initialCount, action) {
  switch (action.type) {
    case "LIGHT":
      return !state;
    default:
      return state;
  }
}
export default light;
