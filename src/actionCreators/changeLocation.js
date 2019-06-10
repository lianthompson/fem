export default function changeLocation(location) {
  return { type: "SET_LOCATION", payload: location };
}

// test
// exportAllDeclaration(changeLocation("Seattle, WA")).toEqual({ type: "SET_LOCATION", payload: "Seattle"})
