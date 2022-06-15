import React from "react"
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
                    <li>
                        <MdDashboard />
                        <span>Dashboard</span>
                    </li>

                    <li>
                        <MdPersonOutline />
                        <span>Users</span>
                    </li>

                    <li>
                        <MdStore />
                        <span>Products</span>
                    </li>

                    <li>
                        <MdOutlinePayment />
                        <span>Orders</span>
                    </li>

                    <li>
                        <MdLocalShipping />
                        <span>Delivery</span>
                    </li>

                    <li>
                        <MdInsertChart />
                        <span>Stats</span>
                    </li>

                    <li>
                        <MdNotificationsNone />
                        <span>Notification</span>
                    </li>

                    <li>
                        <MdOutlineSettingsSystemDaydream />
                        <span>System Health</span>
                    </li>

                    <li>
                        <MdOutlinePsychology />
                        <span>Logs</span>
                    </li>

                    <li>
                        <MdSettingsApplications />
                        <span>Settings</span>
                    </li>

                    <li>
                        <MdOutlineAccountCircle />
                        <span>Profile</span>
                    </li>

                    <li>
                        <MdExitToApp />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar