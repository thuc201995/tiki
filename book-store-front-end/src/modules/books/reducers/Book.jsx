import actionType from "../actions/ActionType";
const initialState = () => ({
  isFetching: true
});
const book = (state = initialState(), action) => {
  console.log(action);

  switch (action.type) {
    case actionType.FETCH_BOOK_LISTS_REQUEST:
      return state;
    default:
      return state;
  }
};
export default book;
