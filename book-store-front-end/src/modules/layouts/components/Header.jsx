import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import logo from "../../../logo.png";

const MenuItems = [
  { name: "Book lists", path: "/books" },
  { name: "Book Form", path: "/book-form" }
];

class Header extends PureComponent {
  //change active menu
  _handleChangeMenu = (e, { value }) => {
    const { menuItemActive } = this.props;

    if (menuItemActive === value) return;
    this.props.handleChangeMenu(value);
    this.props.history.push(value);
  };

  render() {
    const { menuItemActive } = this.props;
    return (
      <Menu pointing secondary size="tiny">
        <Menu.Item style={{ marginLeft: "50px" }}>
          <img src={logo} alt="logo" />
        </Menu.Item>
        {MenuItems.map((item, idx) => {
          return (
            <Menu.Item
              name={item.name}
              active={menuItemActive === item.path}
              onClick={this._handleChangeMenu}
              key={`menu_${idx}`}
              value={item.path}
            />
          );
        })}
      </Menu>
    );
  }
}
export default withRouter(Header);
