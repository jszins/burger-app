import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import classes from './Layout.css'

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    let toggle = this.state.showSideDrawer
    this.setState({showSideDrawer: !toggle})
  }

  render () {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;
