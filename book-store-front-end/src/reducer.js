import { combineReducers } from "redux";
import layout from "./modules/layouts/reducers/Layout";
import book from "./modules/books/reducers/Book";
import books from "./modules/books/reducers/Books";
const AllReducer = combineReducers({ layout, book, books });
export default AllReducer;
