import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { GeneralSetup } from '../pages/GeneralSetup';
import { AdminSetupPage } from '../pages/AdminSetupPage';
import { DepartmentSetupPage } from '../pages/DepartmentSetupPage';
import { SubDepartmentSetupPage } from '../pages/SubDepartmentSetupPage';
import { DeviceSetupPage } from '../pages/DeviceSetupPage';
import { useStyles } from '../static/MiniDrawerStyles';
import clsx from 'clsx';
import SimpleAppBar from './SimpleAppBar';


export const Routing = (props) => {
    const { content, toolbar, contentShift } = useStyles();
    const { openSideBar } = props;

    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            <SimpleAppBar />
            {/* <div className={toolbar} /> */}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/generalSetup' exact component={GeneralSetup} />
                <Route path='/generalSetup/adminSetup' component={AdminSetupPage} />
                <Route path='/generalSetup/department' component={DepartmentSetupPage} />
                <Route path='/generalSetup/sub-department' component={SubDepartmentSetupPage} />
                <Route path='/device' component={DeviceSetupPage} />
            </Switch>
        </main>);
}