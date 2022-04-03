import { DataGrid } from '@material-ui/data-grid';
import { Card, Grid } from '@mui/material';
import axios from 'axios';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import Footer from 'examples/Footer';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import React, { useEffect, useState } from 'react'
import "./AllVehicle.css"

const columns = [
    { field: 'shift', headerName: 'Shift', width:120 },
    {
      field: 'vehicletype',
      headerName: 'Vehicle Type',
      width: 160,
      editable: true,
    },
    {
      field: 'vehicleroute',
      headerName: 'Vehicle Route',
      width: 170,
      editable: true,
    },
    {
      field: 'drivername',
      headerName: 'Driver Name',
      width: 160,
      editable: true,
    },
    {
      field: 'drivercontactnumber',
      headerName: 'Driver Contact Num',
      width: 180,
      editable: true,
    },
    {
      field: 'driverlicensenumber',
      headerName: 'License Num',
      width: 160,
      editable: true,
    },
    {
      field: 'vehiclenumber',
      headerName: 'Vehicle Num',
      width: 160,
      editable: true,
    },
    {
      field: 'kmperoneroute',
      headerName: 'Km Per One Route',
      width: 200,
      editable: true,
    },
    {
      field: 'capacity',
      headerName: 'Capacity',
      width: 160,
      editable: true,
    },
    {
      field: 'startingtimemorning',
      headerName: 'Start Morning',
      width: 170,
      editable: true,
    },
    {
      field: 'startingtimeday',
      headerName: 'Start Day',
      width: 160,
      editable: true,
    },
    {
      field: 'endtimemorning',
      headerName: 'End Morning',
      width: 160,
      editable: true,
    },
    {
      field: 'endtimeday',
      headerName: 'End Day',
      width: 160,
      editable: true,
    },
    {
      field: 'firstmemerpickuptimemorning',
      headerName: 'First Member Pickup Morning',
      width: 270,
      editable: true,
    },
    {
      field: 'firstmemerpickuptimeday',
      headerName: 'First Member Pickup Day',
      width: 240,
      editable: true,
    },
    {
      field: 'lastmemerdroptime',
      headerName: 'Last Member Drop Time',
      width: 240,
      editable: true,
    },
    {
      field: 'vehicleleaderonename',
      headerName: 'Vehicle Leader 1 Name',
      width: 240,
      editable: true,
    },
    {
      field: 'vehicleleaderonecontactnumber',
      headerName: 'Vehicle Leader 1 Contact Num',
      width: 280,
      editable: true,
    },
    {
      field: 'vehicleleadertwoname',
      headerName: 'Vehicle Leader 2 Name',
      width: 240,
      editable: true,
    },
    {
      field: 'vehicleleadertwocontactnumber',
      headerName: 'Vehicle Leader 2 Contact Num',
      width: 280,
      editable: true,
    },
  ];
  
  const rows = [
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


function AllVehicle() {
  const [data, setdata] = useState([]);
  const loadData=async()=>{
    const response=await axios.get("http://localhost:3001/allvehicle");
    setdata(response.data);
  }
  useEffect(() => {
    loadData();
  }, [])
  
  return (
    <DashboardLayout>
    <DashboardNavbar />

    <MDBox pt={6} pb={3}>
    <Grid container spacing={6}>
    <Grid item xs={12}>
    <Card>
    <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              All Vehicle
            </MDTypography>
          </MDBox>
          <div style={{ height: 400, width: '100%' }}>
  <DataGrid
    rows={data}
    columns={columns}
    pageSize={5}
    checkboxSelection
    disableSelectionOnClick
  />
</div>
    </Card>
    
    </Grid>
    </Grid>
    </MDBox>
    <Footer/>
    
</DashboardLayout>
  )
}

export default AllVehicle