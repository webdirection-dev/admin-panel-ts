import React from "react"
import './datatable.scss'

import {userColumns, userRows} from "../../static-data/datatable-data"
import {DataGrid} from '@mui/x-data-grid'


const Datatable: React.FC = () => {
    const actionColumn= [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            },
        }
    ]

    return(
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable