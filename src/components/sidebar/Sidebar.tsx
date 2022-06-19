import React from "react"
import './sidebar.scss'

import SidebarItem from "./SidebarItem"

import {sidebarData} from "../../static-data/sidebar-data"
import {useLocation} from "react-router-dom";

const Sidebar: React.FC = () => {
    const {pathname} = useLocation()

    return(
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin Panel</span>
            </div>

            <hr/>

            <div className="center">
                <ul>
                    {
                        sidebarData.map((i, index) => {
                            return(
                                <SidebarItem key={i.title} index={index} pathname={pathname} {...i}/>
                            )
                        })
                    }
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