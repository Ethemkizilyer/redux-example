import reducer from "./reducer/basketReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(reducer);
