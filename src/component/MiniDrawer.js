import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { staticMenu } from '../static/Menus';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import ListItemLinkContainer from '../container/ListItemLinkContainer';
import { useStyles } from '../static/MiniDrawerStyles';

function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { openSideBar, handlerSideBar } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openSideBar,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handlerSideBar}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: openSideBar,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ color: 'white' }} component={Link} to='/' variant="h6" noWrap>
                        Cogent Health
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openSideBar,
                    [classes.drawerClose]: !openSideBar,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openSideBar,
                        [classes.drawerClose]: !openSideBar,
                    }),
                }}
                open={openSideBar}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handlerSideBar}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>

                <Divider />
                <nav className={classes.lists}>
                    <List>
                        {staticMenu.map((menu, index) => (
                            <React.Fragment key={index}>
                                <ListItemLinkContainer menuObj={menu} />
                            </React.Fragment>
                        ))}
                    </List>
                </nav>
                <Divider />
            </Drawer>
        </React.Fragment >
    );
}

export default MiniDrawer;
