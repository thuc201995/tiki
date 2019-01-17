import BookLists from "../components/BookLists";
import { connect } from "react-redux";
import * as action from "../actions/Actions";
const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => {
      dispatch(action.fetchBooks());
    },
    handleDelete: id => {
      dispatch(action.handleDelete(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookLists);
