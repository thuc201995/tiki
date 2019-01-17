import { RSAA } from "redux-api-middleware";
import ActionType from "./ActionType";
import { bookApi } from "../../../config/apiRoot";
export const fetchBooks = () => {
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

export const fetchBook = bookId => {
  return {
    [RSAA]: {
      endpoint: `${bookApi}/${bookId}`,
      method: "GET",
      types: [
        ActionType.FETCH_BOOK_REQUEST,
        ActionType.FETCH_BOOK_SUCCESS,
        ActionType.FETCH_BOOK_FAILURE
      ]
    }
  };
};

export const createBook = data => {
  return {
    [RSAA]: {
      endpoint: bookApi,
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
      types: [
        ActionType.CREATE_BOOK_REQUEST,
        ActionType.CREATE_BOOK_SUCCESS,
        ActionType.CREATE_BOOK_FAILURE
      ]
    }
  };
};

export const editBook = (data, bookId) => {
  return {
    [RSAA]: {
      endpoint: `${bookApi}/${bookId}`,
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(data),
      types: [
        ActionType.EDIT_BOOK_REQUEST,
        ActionType.EDIT_BOOK_SUCCESS,
        ActionType.EDIT_BOOK_FAILURE
      ]
    }
  };
};

export const closeResultModal = () => {
  return {
    type: ActionType.CLOSE_RESULT_MODAL
  };
};
export const handleDelete = bookId => {
  return {
    [RSAA]: {
      endpoint: `${bookApi}/${bookId}`,
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      types: [
        ActionType.DELETE_BOOK_REQUEST,
        ActionType.DELETE_BOOK_SUCCESS,
        ActionType.DELETE_BOOK_FAILURE
      ]
    }
  };
};
