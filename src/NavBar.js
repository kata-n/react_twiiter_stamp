import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';

class NavBar extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.onToggle}
            onRequestChange={() => this.props.onToggle()}
           >
          </Drawer>
          <AppBar
            title="React Study"
            onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
export default NavBar;