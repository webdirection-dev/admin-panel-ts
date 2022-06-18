import React from "react"
import {Link} from 'react-router-dom'
import './sidebar.scss'

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

const Sidebar: React.FC = () => {

    return(
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin Panel</span>
            </div>

            <hr/>

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>

                    <li>
                        <Link to={'/'}>
                            <MdDashboard className='icon'/>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <p className="title">LISTS</p>

                    <li>
                        <Link to={'/users'}>
                            <MdPersonOutline className='icon'/>
                            <span>Users</span>
                        </Link>
                    </li>

                    <li>
                        <MdStore className='icon'/>
                        <span>Products</span>
                    </li>

                    <li>
                        <MdOutlinePayment className='icon'/>
                        <span>Orders</span>
                    </li>

                    <li>
                        <MdLocalShipping className='icon'/>
                        <span>Delivery</span>
                    </li>

                    <p className="title">USEFUL</p>

                    <li>
                        <MdInsertChart className='icon'/>
                        <span>Stats</span>
                    </li>

                    <li>
                        <MdNotificationsNone className='icon'/>
                        <span>Notification</span>
                    </li>

                    <p className="title">SERVICE</p>

                    <li>
                        <MdOutlineSettingsSystemDaydream className='icon'/>
                        <span>System Health</span>
                    </li>

                    <li>
                        <MdOutlinePsychology className='icon'/>
                        <span>Logs</span>
                    </li>

                    <li>
                        <MdSettingsApplications className='icon'/>
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>

                    <li>
                        <MdOutlineAccountCircle className='icon'/>
                        <span>Profile</span>
                    </li>

                    <li>
                        <MdExitToApp className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="border-style">
                    <div className="colorOption light"></div>
                </div>

                <div className="border-style">
                    <div className="colorOption gray"></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar