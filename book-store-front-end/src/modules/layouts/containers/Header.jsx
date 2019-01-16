import { connect } from "react-redux";
import Header from "../components/Header";
import * as action from "../actions/Actions";
const mapStateToProps = state => {
  const { layout } = state;
  const { menuItemActive } = layout;
  return { menuItemActive };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChangeMenu: menu => {
      dispatch(action.handleChangeMenu(menu));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
