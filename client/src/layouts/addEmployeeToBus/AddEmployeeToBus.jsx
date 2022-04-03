import { Card, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from 'examples/Footer';

function addEmployeeToBus() {


  const [routesInBus, setroutesInBus] = useState(['USA','UK','India']);

  //Traansport Type
  const [transportType, settransportType] = useState('');
  const transportTypeChange=(e)=>{
    settransportType(e.target.value);
  }

  //shift
  const [shift, setshift] = useState('');
  const shiftChange=(e)=>{
    setshift(e.target.value);
  }

  //Transport Route
  const [transportRoute, settransportRoute] = useState('');
  const transportRouteChange=(e)=>{
    settransportRoute(e.target.value);
  }

  //EPF Number
  const [epfNummber, setepfNummber] = useState('');
  const epfNummberChange=(e)=>{
    setepfNummber(e.target.value);
  }

  //Name
  const [name, setname] = useState('');
  const nameChange=(e)=>{
    setname(e.target.value);
  }

  //Pickup Point
  const [pickupPoint, setpickupPoint] = useState('');
  const pickupPointChange=(e)=>{
    setpickupPoint(e.target.value);
  }


  //pickup time
  const [pickupTime, setpickupTime] = useState('');
  const pickupTimeChange=(e)=>{
    setpickupTime(e.target.value);
  }

  
  //drop time
  const [dropTime, setdropTime] = useState('');
  const dropTimeChange=(e)=>{
    setdropTime(e.target.value);
  }

  //Van Route
  const [vanRoute, setvanRoute] = useState('');
  const vanRouteChange=(e)=>{
    setvanRoute(e.target.value);
  }

  //handle Change Function
  const handleChange=(e)=>{

    // e.preventDefault();
    toast.success("Success")
    Axios.post('http://localhost:3001/addemployeetobus',{
      transporttype:transportType,
      shift:shift,
      route:transportRoute,
      epfnumber:epfNummber,
      name:name,
      pickuppoint:pickupPoint,
      pickuptime:pickupTime,
      droptime:dropTime,
      vanroute:vanRoute


      

    }).then(()=>{
      console.log("Success")
    })

    

  }

  
  

  return (
    <div>
         <DashboardLayout>
        <DashboardNavbar />
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
                  Add Employee To Bus
                </MDTypography>
              </MDBox>
              
        
        <div className="class">
        
        <form className="form" action="" onSubmit={handleChange}>
        
        <div className="formClass">

        <div className="transportType">
        <div className="label">
        <label className="labelTitle" htmlFor="">Transport Type</label>
        </div>
        <div className="selectArea">
        <Select
        className='selectAreaSelect'
        displayEmpty
        value={transportType}
        onChange={transportTypeChange}
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem value="">Empty</MenuItem>
          <MenuItem value="bus">Bus</MenuItem>
          <MenuItem value="van">Van</MenuItem>
        </Select>
        </div>
        </div>

        <div>
          <div> <label className="labelTitle" htmlFor="">Select Shift</label></div>
        <div>
        <RadioGroup
        onChange={shiftChange}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="shiftA" control={<Radio />} label="Shift A" />
        <FormControlLabel value="shiftB" control={<Radio />} label="Shift B" />
        <FormControlLabel value="shiftC" control={<Radio />} label="Shift C" />
        <FormControlLabel value="12Hours" control={<Radio />} label="12 Hours" />
      </RadioGroup>
        </div>
        </div>

        <div className="transportRoute">
        <div className="label">
        <label className="labelTitle" htmlFor="">Transport Route</label>
        </div>
        <div className="selectArea">
        <Select
        className='selectAreaSelect'
        onChange={transportRouteChange}
        fullWidth sx={{ m: 1 }} variant="outlined">
       {
         routesInBus.map(routes=>(
           <MenuItem value={routes}>{routes}</MenuItem>
         ))
       }
        </Select>
        </div>
        </div>

        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Enter EPF Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          onChange={epfNummberChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        <div className="nameClass">

        <div className="label">
        <label className="labelTitle" htmlFor="">Enter Name</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={nameChange}
          ></TextField>
        </FormControl>
        </div>

        </div>

        <div className="pickupPointClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Enter Pickup Point</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={pickupPointChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        <div className="pickupTime">
        <div className="label">
        <label className="labelTitle" htmlFor="">Pickup Time</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          onChange={pickupTimeChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        <div className="dropTime">
        <div className="label">
        <label className="labelTitle" htmlFor="">Drop Time</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          onChange={dropTimeChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        <div className="vanRoute">
        <div className="label">
        <label className="labelTitle" htmlFor="">Van Route</label>
        </div>
        <div className="selectArea">
        <Select
        value={vanRoute}
        onChange={vanRouteChange}
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem value="awissawella">Awissawella</MenuItem>
          <MenuItem value="Rathnapura">Rathnapura</MenuItem>
          <MenuItem value="Gampola" >Gampola</MenuItem>
        </Select>
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

export default addEmployeeToBus


