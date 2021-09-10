import React from 'react';
import MiniDrawerContainer from '../container/MiniDrawerContainer';
import { Routing } from './Routing';
import { useStyles } from '../static/MiniDrawerStyles';
// import AppBarComponent from './AppBarComponent';

function MainPage(props) {
    const classes = useStyles;
    const { openSideBar, toggleHandler } = props;
    
    return (
        <div className={classes.root}>
            {/* <AppBarComponent /> */}
            <MiniDrawerContainer openSideBar={openSideBar} sideBarClick={toggleHandler} />
            <Routing openSideBar={openSideBar} sideBarClick={toggleHandler} />
        </div>
    );
}

export default MainPage;