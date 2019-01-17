import BookForm from "../components/BookForm";
import { connect } from "react-redux";
import * as action from "../actions/Actions";
const mapStateToProps = state => {
  const { book } = state;
  return { book };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: bookId => {
      dispatch(action.fetchBook(bookId));
    },
    createBook: data => {
      dispatch(action.createBook(data));
    },
    editBook: (data, bookId) => {
      dispatch(action.editBook(data, bookId));
    },
    closeResultModal: () => {
      dispatch(action.closeResultModal());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
