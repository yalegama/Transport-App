import React, { useEffect, useState } from 'react'
import "./AllEmployee.css"
import { DataGrid } from '@material-ui/data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import { Card, Grid } from '@mui/material';
import MDTypography from 'components/MDTypography';
import TestEmployee from './TestEmployee';
import axios from 'axios';
import Footer from 'examples/Footer';

const columns = [
  {
    field: 'epfnumber',
    headerName: 'EPF',
    width: 110,
    editable: true,
  },
  
  {
    field: 'name',
    headerName: 'Name',
    width: 130,
    editable: true,
  },
    {
      field: 'transporttype',
      headerName: 'TransportType',
      width: 180,
      editable: true,
    },
    {
      field: 'shift',
      headerName: 'Shift',
      width: 150,
      editable: true,
    },
    {
      field: 'route',
      headerName: 'Route',
      width: 130,
      editable: true,
    },
    
    {
      field: 'pickuppoint',
      headerName: 'Pickup Point',
      width: 160,
      editable: true,
    },
    {
      field: 'pickuptime',
      headerName: 'Pickup Time',
      width: 160,
      editable: true,
    },
    {
      field: 'droptime',
      headerName: 'Drop Time',
      width: 160,
      editable: true,
    },
    {
      field: 'vanroute',
      headerName: 'Van Route',
      width: 160,
      editable: true,
    }
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

function AllEmployee() {
  const [data, setdata] = useState([]);
  const loadData=async()=>{
    const response=await axios.get("http://localhost:3001/allemployee");
    setdata(response.data);
  }
  useEffect(() => {
    loadData();
    console.log(data)
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
                  All Employees
                </MDTypography>
              </MDBox>
              <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
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

export default AllEmployee