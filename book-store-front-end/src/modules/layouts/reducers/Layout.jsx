import ActionType from "../actions/ActionType";
const initialState = () => ({
  menuItemActive: "/books"
});
const layout = (state = initialState(), action) => {
  switch (action.type) {
    case ActionType.CHANGE_MENU:
      return {
        ...state,
        menuItemActive: action.menu
      };
    default:
      return state;
  }
};

export default layout;
