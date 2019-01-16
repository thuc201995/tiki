import { RSAA } from "redux-api-middleware";
import ActionType from "./ActionType";
import { bookApi } from "../../../config/apiRoot";
export const fetchBooks = () => {
  console.log(bookApi);
  return {
    [RSAA]: {
      endpoint: bookApi,
      method: "GET",
      types: [
        ActionType.FETCH_BOOK_LISTS_REQUEST,
        ActionType.FETCH_BOOK_LISTS_SUCCESS,
        ActionType.FETCH_BOOK_LISTS_FAILURE
      ]
    }
  };
};
