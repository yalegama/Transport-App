import React, { useEffect, useState } from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import "./Employee.css"
import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ToastContainer, toast } from 'react-toastify';
import MDBox from 'components/MDBox';
import { Card, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material'
import Footer from 'examples/Footer';
import MDTypography from 'components/MDTypography';
function Employee() {

// EPF Number

  const [epfnumber, setepfnumber] = useState('')
  const epfChange=(e)=>{
      setepfnumber(e.target.value);
  
  }

  // Shift
    const [shift, setshift] = useState("0")
    const shiftChange=(e)=>{
        setshift(e.target.value);
        
        
    }


    // 6 am in method
    const [sixinmethod, setsixinmethod] = useState("0")
    const sixinmethodChange=(e)=>{
      setsixinmethod(e.target.value);
    }
    



    const handleChange=(e)=>{
toast.success("Success");


    }


  return (
    <div>
      <DashboardLayout>
          <DashboardNavbar/>

          <ToastContainer position='top-center'/>
        
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
                <MDTypography variant="h5" color="white">
                  Add Employee 
                </MDTypography>
              </MDBox>
          
        
        <div className="class">
        
        <form className="form" action="" onSubmit={handleChange}>
        
        <div className="formClass">




        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Enter EPF Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField onChange={epfChange}></TextField>
        </FormControl>
        </div>
        </div>

        <div className="shift">
        <div className="label">
        <label className="labelTitle" htmlFor="">Select Shift</label>
        </div>
        <div className="selectArea">
        <Select
value={shift}
onChange={shiftChange}
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem value={0} >Select</MenuItem>
          <MenuItem value={"a"} >A</MenuItem>
          <MenuItem value={"b"} >B</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={12}>12 Hours</MenuItem>
          <MenuItem value={"genaral"}>Genaral</MenuItem>
        </Select>
        </div>
        </div>

<div className='alltable'>

{/* 6 am In  */}
<div className='table1'>
  <table border="2">
    <tr className='title'>Factory In</tr>
   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th className='column' colSpan="2">6 am IN</th>
    </tr>
    <tr className='method'>
      <th colSpan="2">
        <Select
        value={sixinmethod}
        onChange={sixinmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem>Method</MenuItem>
          <MenuItem>Bus</MenuItem>
          <MenuItem>Van</MenuItem>
          <MenuItem>Bus & Van</MenuItem>
          <MenuItem>Foot</MenuItem>
          <MenuItem>Bike</MenuItem>
          <MenuItem>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">2 pm IN</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">10 pm IN</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">Genaral</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>

   <div className='table1'>
     
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">6 pm IN</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>



  </table>
</div>




{/* table 2  */}

<div className='table2'>
  <table border="1">
    <tr>Factory Out</tr>
   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">2 pm Out</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">10 pm Out</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">5 am Out</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">Genaral</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>

{/* table5 */}
   <div className='table1'>
     
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">6 am Out</th>
    </tr>
    <tr>
      <th colSpan="2">Schedule</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus </th>
      <th colSpan="1" >Van</th>
    </tr>
    <tr>
      <th>Bus Route</th>
      <th>Van Route</th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Pickup Time </th>
      <th colSpan="1" >Van Pickup Time</th>
    </tr>
    <tr>
      <th> Bus Pickup Location </th>
      <th>Van Pickup Location</th>
    </tr>
   
   </div>



  </table>
</div>


</div>
   
        </div>

        <div className='button'>
           <button type='submit' className='buttonClass'>Save</button>
         </div>


        </form>

        </div>
        </Card>
        </Grid>
        </Grid>
        </MDBox>
        <Footer/>
      </DashboardLayout>
      </div>
  )
}

export default Employee