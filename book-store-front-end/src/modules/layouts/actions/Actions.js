import actionType from "./ActionType";
export const handleChangeMenu = menu => {
  return {
    type: actionType.CHANGE_MENU,
    menu
  };
};
