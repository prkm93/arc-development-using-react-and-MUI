import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
    const { children  } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // ref - https://v4.mui.com/customization/default-theme/ , Under mixis property
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  }
}))  
 
const Header = (props) => { 

  const classes = useStyles();
  
    return (
        <>  
         <ElevationScroll>
         <AppBar position="fixed">
            <Toolbar disableGutters>
              <img src={logo} alt="company logo" className={classes.logo}/>
            </Toolbar> 
         </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </>
    )
}

export default Header;  