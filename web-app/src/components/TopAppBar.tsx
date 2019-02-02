import AppBar from '@material-ui/core/AppBar';
import {IconButton, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import React, {Component} from 'react';

const styles = {};

class TopAppBar extends Component<any, any> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton className={classes.menuButton}></IconButton>  
        </Toolbar>
      
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopAppBar);