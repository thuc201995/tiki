import { combineReducers } from "redux";
import layout from "./modules/layouts/reducers/Layout";
import book from "./modules/books/reducers/Book";
const AllReducer = combineReducers({ layout, book });
export default AllReducer;
