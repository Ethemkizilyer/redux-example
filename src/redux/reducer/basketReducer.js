import { ADD, CLEAR, REMOVE } from "../type/basketType";

let initialState =[];
// let initialState = initialState ? localStorage.getItem("test") : [];
 
const reducer = (state = initialState, action) => {
  
  
  switch (action.type) {
    case ADD:
      return [
        ...state.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
    case REMOVE:
      return [...state.filter((item) => item.id !== action.payload.id)];
    case CLEAR:
      return [];

    default:
      return state;
  }
 
};
// rxreducer

export default reducer;
