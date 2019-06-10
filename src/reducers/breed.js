export default function breedReducer(state = "", action) {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_LOCATION") {
    return "";
  } else {
    return state;
  }
}
