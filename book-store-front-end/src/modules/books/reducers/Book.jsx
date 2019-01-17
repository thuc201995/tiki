import actionType from "../actions/ActionType";
const initialState = () => ({
  isFetching: false,
  data: {},
  fetchError: false,
  modal: {
    isOpen: false,
    modalHeader: "",
    modalContent: "",
    modalClass: "green"
  }
});
const book = (state = initialState(), action) => {
  switch (action.type) {
    case actionType.FETCH_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionType.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload }
      };
    case actionType.FETCH_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: true
      };

    case actionType.CREATE_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionType.CREATE_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        modal: {
          isOpen: true,
          modalHeader: "success",
          modalContent: "Data inserted successfully",
          modalClass: "green"
        }
      };
    case actionType.CREATE_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        modal: {
          isOpen: true,
          modalHeader: "error",
          modalContent: "Error has occurred please try again later",
          modalClass: "red"
        }
      };

    case actionType.EDIT_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionType.EDIT_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        modal: {
          isOpen: true,
          modalHeader: "success",
          modalContent: "Data has been update",
          modalClass: "green"
        }
      };
    case actionType.EDIT_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        modal: {
          isOpen: true,
          modalHeader: "error",
          modalContent: "Error has occurred please try again later",
          modalClass: "red"
        }
      };
    case actionType.CLOSE_RESULT_MODAL:
      return {
        ...state,
        modal: { isOpen: false }
      };
    default:
      return state;
  }
};
export default book;
