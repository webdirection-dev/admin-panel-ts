import React from "react"
import {Link} from "react-router-dom"

const NotFound: React.FC = () => {

    return(
        <>
            <h2>Page not found</h2>
            <h3>Please, go to <Link to='/'>homepage</Link></h3>
        </>
    )
}

export default NotFound