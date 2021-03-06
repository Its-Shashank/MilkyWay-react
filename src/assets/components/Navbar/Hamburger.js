import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { 
  MenuTwoTone, 
  HomeTwoTone, 
  FingerprintTwoTone, 
  BorderColorTwoTone, 
  ExitToApp,
  ShoppingCartTwoTone
} from '@material-ui/icons';
import { Link } from 'react-router-dom'

// scss
import '../../scss/togglebar.scss'

export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const delay = {
    transition: '300ms'
  }

  const logout = (props) => {
    localStorage.removeItem("login")
    toggleDrawer('right', false)
  }
  
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <MenuTwoTone className='hamburger' />
            </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
              <div className="collapse-container" style={delay}>
                <Link className='hamburger-links' 
                  to='/'
                  onClick={toggleDrawer(anchor, false)}>
                    <HomeTwoTone /> Home
                </Link>

                {
                  !localStorage.getItem("login") ? (
                    <div>
                        <Link className='hamburger-links'
                        to='/login'
                        onClick={toggleDrawer(anchor, false)}>
                          <FingerprintTwoTone /> Login
                        </Link>

                        <Link className='hamburger-links'
                          to='/signup'
                          onClick={toggleDrawer(anchor, false)}>
                            <FingerprintTwoTone /> Signup
                        </Link>
                    </div>
                  
                  ) : (
                    <div>
                      <div id='logout-btn'
                      className='hamburger-links'
                      onClick={logout}>
                        <ExitToApp /> Logout
                      </div>

                      <Link
                      to='/orders/all'
                      className='hamburger-links'
                      onClick={toggleDrawer(anchor, false)}
                      >
                        <ShoppingCartTwoTone /> My orders</Link>
                    </div>
                    
                    )
                    
                }

                <Link className='hamburger-links'
                  to='/products'
                  onClick={toggleDrawer(anchor, false)}>
                    <BorderColorTwoTone /> Order Now!
                </Link>

              </div>
            
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
