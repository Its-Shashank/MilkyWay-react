import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu, Home, Dashboard, Phone, Info } from '@material-ui/icons';
import { Link } from 'react-router-dom'

// scss
import '../../scss/togglebar.scss'



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const iconTags = [<Home/>, <Dashboard />, <Phone/>, 
        <Info/>
    ]
// ['Home', 'Dashboard', 'Contact', 'About']
   const navLinks = [
       {
            name: 'Home',
            path: '/'
       },
       {
           name: 'Dashboard',
           path: '/dashboard'
       },
       {
           name: 'Contact',
           path: '/contact'
       },
       {
           name: 'About',
           path: '/about'
       }
   ] 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((text, index) => (
          <ListItem button key={text.name}>
            <ListItemIcon>
                {iconTags[index]}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <Menu className='hamburger' />
            </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
              <Link className='hamburger-links' to='/'>
                {list(anchor)}
              </Link>
            
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
