import React from "react"
import './widget.scss'

import {UseGetWidgetData} from "./use-get-widget-data"
import {MdKeyboardArrowUp} from "react-icons/md"

interface IWidget {
    type: string;
}

const Widget: React.FC<IWidget> = ({type}) => {
    const {title, isMoney, link, icon} = UseGetWidgetData(type)

    const amount = 100
    const diff = 25

    return(
        <div className='widget'>
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">{isMoney && '$'}{amount}</span>
                <span className="link">{link}</span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <MdKeyboardArrowUp className='percentageIcon'/>{diff}%</div>
                {icon}
            </div>
        </div>
    )
}

export default Widget