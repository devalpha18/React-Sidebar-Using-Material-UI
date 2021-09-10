import React from 'react';
import { GeneralSetup } from "../pages/GeneralSetup";
import { AdminSetupPage } from "../pages/AdminSetupPage";
import { DepartmentSetupPage } from "../pages/DepartmentSetupPage";
import { SubDepartmentSetupPage } from "../pages/SubDepartmentSetupPage";
import { DeviceSetupPage } from "../pages/DeviceSetupPage";
import { Settings, DesktopMac, Store, AccountBox } from "@material-ui/icons";

export const staticMenu = [
    {
        id:1,
        menuName: 'General Setup',
        menuDescription: 'General setups menus',
        path: '/generalSetup',
        component: GeneralSetup,
        exact: true,
        icon :<Settings />,
        submenu: [
            {
                id:3,
                menuName: 'Admin Setup',
                menuDescription: 'To Setup admins',
                path: '/generalSetup/adminSetup',
                component: AdminSetupPage,
                icon: <AccountBox />,
            },
            {
                id: 4,
                menuName: 'Department Setup',
                menuDescription: 'To Setup departments',
                path: '/generalSetup/department',
                component: DepartmentSetupPage,
                icon: <AccountBox />
            },
            {
                id: 5,
                menuName: 'Sub Department Setup',
                menuDescription: 'To Setup sub departments',
                path: '/generalSetup/sub-department',
                component: SubDepartmentSetupPage,
                icon: <AccountBox />
            }
        ]
    },
    {
        id:2,
        menuName: 'Device Setup',
        menuDescription: 'Device mac id setup menus',
        path: '/device',
        component: DeviceSetupPage,
        exact: true,
        icon: <DesktopMac />,
        submenu: []
    },
    {
        id: 6,
        menuName: 'Invenory Setup',
        menuDescription: 'Inventory setup menus',
        path: '/inventory',
        component: DeviceSetupPage,
        exact: true,
        icon: <Store />,
        submenu: [
            {
                id: 7,
                menuName: 'Products',
                menuDescription: 'To Setup products',
                path: '/inventory/products',
                component: AdminSetupPage,
                icon: '',
            },
            {
                id: 8,
                menuName: 'Transactions',
                menuDescription: 'To Setup transactions',
                path: '/inventory/transactions',
                component: DepartmentSetupPage,
                icon: '',
            }
        ]
    }
];