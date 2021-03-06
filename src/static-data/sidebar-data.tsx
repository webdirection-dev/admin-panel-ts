import React, {ReactElement} from "react"

import {
    MdDashboard,
    MdPersonOutline,
    MdStore,
    MdOutlinePayment,
    MdLocalShipping,
    MdInsertChart,
    MdNotificationsNone,
    MdOutlineSettingsSystemDaydream,
    MdOutlinePsychology,
    MdSettingsApplications,
    MdOutlineAccountCircle,
    MdExitToApp,
} from "react-icons/md"

export interface ISidebarItem {
    title: string;
    icon: ReactElement;
    link: string;
    index: number;
    pathname: string;
}

export const sidebarData = [
    {
        title: 'Dashboard',
        icon: <MdDashboard className='icon'/>,
        link: '/',
    },
    {
        title: 'Users',
        icon: <MdPersonOutline className='icon'/>,
        link: '/users',
    },
    {
        title: 'Products',
        icon: <MdStore className='icon'/>,
        link: '/products',
    },
    {
        title: 'Orders',
        icon: <MdOutlinePayment className='icon'/>,
        link: '/orders',
    },
    {
        title: 'Delivery',
        icon: <MdLocalShipping className='icon'/>,
        link: '/delivery',
    },
    {
        title: 'Stats',
        icon: <MdInsertChart className='icon'/>,
        link: '/stats',
    },
    {
        title: 'Notification',
        icon: <MdNotificationsNone className='icon'/>,
        link: '/notification',
    },
    {
        title: 'System Health',
        icon: <MdOutlineSettingsSystemDaydream className='icon'/>,
        link: '/health',
    },
    {
        title: 'Logs',
        icon: <MdOutlinePsychology className='icon'/>,
        link: '/logs',
    },
    {
        title: 'Settings',
        icon: <MdSettingsApplications className='icon'/>,
        link: '/settings',
    },
    {
        title: 'Profile',
        icon: <MdOutlineAccountCircle className='icon'/>,
        link: '/profile',
    },
    {
        title: 'Logout',
        icon: <MdExitToApp className='icon'/>,
        link: '/logout',
    },
]

export const titleSidebarItem = [
    <p className="title">MAIN</p>,
    <p className="title">LISTS</p>,
    <p className="title">USEFUL</p>,
    <p className="title">SERVICE</p>,
    <p className="title">USER</p>,
]