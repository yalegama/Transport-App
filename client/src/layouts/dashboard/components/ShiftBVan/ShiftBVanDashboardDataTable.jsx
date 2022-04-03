import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ShiftBVanDashboardDataTable() {
    
    const [data, setdata] = useState([]);
    const loadData=async()=>{
        const response=await axios.get("http://localhost:3001/shiftbvan");
        setdata(response.data);
    }

    useEffect(() => {
        loadData();
    }, [])
    

    const columns = [
        { field: 'vehicleroute', headerName: 'Vehicle Route', width: 130 },
        { field: 'vehicletype', headerName: 'Vehicle Type', width: 130 },
        {
          field: 'capacity',
          headerName: 'Capacity',
          width: 90,
        },
        {
          field: 'addnew',
          headerName: 'Add New',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
  return (
    <div>
        <div style={{ height: 500, width: '100%' }}>
         
         <DataGrid
           rows={data}
           columns={columns}
           pageSize={5}
           rowsPerPageOptions={[5]}
           checkboxSelection
         />
       </div>
    </div>
  )
}

export default ShiftBVanDashboardDataTable