import actionType from "../actions/ActionType";
const initialState = () => ({
  isFetching: false,
  data: [],
  fetchError: false,
  deleteSuccess: false
});
const books = (state = initialState(), action) => {
  switch (action.type) {
    case actionType.FETCH_BOOK_LISTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        deleteSuccess: false
      };
    case actionType.FETCH_BOOK_LISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.payload]
      };
    case actionType.FETCH_BOOK_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: true
      };

    case actionType.DELETE_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionType.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        deleteSuccess: true
      };
    case actionType.DELETE_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        deleteError: true
      };
    default:
      return state;
  }
};
export default books;
