import BookLists from "../components/BookLists";
import { connect } from "react-redux";
import * as action from "../actions/Actions";
const mapStateToProps = state => {
  console.log("state");
  const { book } = state;
  return { book };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => {
      dispatch(action.fetchBooks());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookLists);
