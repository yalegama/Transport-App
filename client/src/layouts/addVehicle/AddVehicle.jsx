import { Button, Card, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { number } from 'prop-types'
import React, { useState } from 'react'
import "./AddVehicle.css"
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestForm from './TestForm'
import Footer from 'examples/Footer'

function addVehicle() {

    //Shift type
    const [shift, setshift] = React.useState('');
    const shiftChange=(e)=>{
    setshift(e.target.value)
}
 
 
  //select value
  const [vehicletype, setvehicletype] = React.useState('');

    const handleChange=(event)=>{
      setvehicletype(event.target.value)
    }


 

//vehicle Route
const [vehicleroute, setvehicleroute] = React.useState('');
  
const vehicleRouteChange=(e)=>{
  setvehicleroute(e.target.value);
}

//Driver Name
const [drivername, setdrivername] = useState('');
const driverNameChange=(e)=>{
  setdrivername(e.target.value);
}

//Driver Contact Number
const [drivercontactnumber, setdrivercontactnumber] = useState('');
const driverContactNumberChange=(e)=>{
  setdrivercontactnumber(e.target.value)
}
//license Number
const [driverlicensenumber, setdriverlicensenumber] = useState('');
const licenseNumberChange=(e)=>{
  setdriverlicensenumber(e.target.value)
}

//Vehicle Number
const [vehiclenumber, setvehiclenumber] = useState('');
const vehicleNumberChnage=(e)=>{
  setvehiclenumber(e.target.value)
}
//km Per One Route
const [kmperoneroute, setkmperoneroute] = useState('');
const kmPerOneRouteChange=(e)=>{
  setkmperoneroute(e.target.value)
}
//capacity
const [capacity, setcapacity] = useState('');
const capacityChange=(e)=>{
  setcapacity(e.target.value);
}
//startingTimeMorning
const [startingtimemorning, setstartingtimemorning] = useState('');
const startingTimeMorningChange=(e)=>{
  setstartingtimemorning(e.target.value);
}

//startingTimeDay
const [startingtimeday, setstartingtimeday] = useState('');
const startingTimeDayChange=(e)=>{
  setstartingtimeday(e.target.value);
}
//endTimeMorning
const [endtimemorning, setendtimemorning] = useState('');
const endTimeMorningChange=(e)=>{
  setendtimemorning(e.target.value);
}
//endTimeDay
const [endtimeday, setendtimeday] = useState('');
const endTimeDayChange=(e)=>{
  setendtimeday(e.target.value);
}

//1stMemerPickupTimeMorning
const [firstmemerpickuptimemorning, setfirstmemerpickuptimemorning] = useState('');
const firststMemerPickupTimeMorningChange=(e)=>{
  setfirstmemerpickuptimemorning(e.target.value);
}
//1stMemerPickupTimeDay
const [firstmemerpickuptimeday, setfirstmemerpickuptimeday] = useState('');
const firststMemerPickupTimeDayChange=(e)=>{
  setfirstmemerpickuptimeday(e.target.value);
}
//lastMemberDropTime
const [lastmemerdroptime, setlastmemerdroptime] = useState('');
const lastmemerdroptimeChange=(e)=>{
  setlastmemerdroptime(e.target.value);
}


//busLeader one
const [vehicleleaderonename, setvehicleleaderonename] = useState('');
const busLeaderOneChange=(e)=>{
  setvehicleleaderonename(e.target.value);
}
//busLeader1Contact
const [vehicleleaderonecontactnumber, setvehicleleaderonecontactnumber] = useState('');
const busLeaderOneContactChange=(e)=>{
  setvehicleleaderonecontactnumber(e.target.value);
}
//busLeader two
const [vehicleleadertwoname, setvehicleleadertwoname] = useState('');
const busLeaderTwoChange=(e)=>{
  setvehicleleadertwoname(e.target.value);
}
//busLeader Two Contact
const [vehicleleadertwocontactnumber, setvehicleleadertwocontactnumber] = useState('');
const busLeaderTwoContactChange=(e)=>{
  setvehicleleadertwocontactnumber(e.target.value);
}


//Submit Form
const handleSubmit=(e)=>{
if(shift=='' || vehicletype==''|| vehicleroute==''){
  e.preventDefault();
  toast.error("Please Fill The All Rows")
}else{
   
  toast.success("Success");
    Axios.post('http://localhost:3001/addvehicle',{
      shift:shift,
      vehicletype:vehicletype,
      vehicleroute:vehicleroute,
      drivername:drivername,
      drivercontactnumber:drivercontactnumber,
      driverlicensenumber:driverlicensenumber,
      vehiclenumber:vehiclenumber,
      kmperoneroute:kmperoneroute,
      capacity:capacity,
      startingtimemorning:startingtimemorning,
      startingtimeday:startingtimeday,
      endtimemorning:endtimemorning,
      endtimeday:endtimeday,
      firstmemerpickuptimemorning:firstmemerpickuptimemorning,
      firstmemerpickuptimeday:firstmemerpickuptimeday,
      lastmemerdroptime:lastmemerdroptime,
      vehicleleaderonename:vehicleleaderonename,
      vehicleleaderonecontactnumber:vehicleleaderonecontactnumber,
      vehicleleadertwoname:vehicleleadertwoname,
      vehicleleadertwocontactnumber:vehicleleadertwocontactnumber
  
    }).then(()=>{
      console.log('Success')
    })

}

}

  return (
    <DashboardLayout>
      <ToastContainer position='top-center' />
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
                  Add New Vehicle
                </MDTypography>
              </MDBox>
              <div className='addVehicle'>
    
        
        <div className="class">
        
        <form action="" className='form' onSubmit={handleSubmit}>


        <div className='shiftA'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Shift </label>
        </div>
        
        <RadioGroup
        onChange={shiftChange}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="shiftA" control={<Radio />} label="Shift A" />
        <FormControlLabel value="shiftB" control={<Radio />} label="Shift B" />
      </RadioGroup>

        </div>
        </div>


        
        <div className='vehicleType'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Type</label>
        </div>
        <div>
        <div className="selectArea">
        <Select
        className='selectAreaSelect'
        displayEmpty
        value={vehicletype}
        onChange={handleChange}
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem value="">Empty</MenuItem>
          <MenuItem value="bus">Bus</MenuItem>
          <MenuItem value="van">Van</MenuItem>
        </Select>
        </div>
        </div>
        </div>
        </div>

        <div className='busRoute'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Route</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          onChange={vehicleRouteChange}
          ></TextField>
        </FormControl>
        </div>
        </div>
        </div>

        <div className='driverName'>

        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Driver Name</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={driverNameChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='contactNumber'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Driver Contact Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={driverContactNumberChange}
          type="number"></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='licenseNumber'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Driver License Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={licenseNumberChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        
        <div className='vehicleNumber'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={vehicleNumberChnage}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='kmPerOneRoute'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Km per One Route</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={kmPerOneRouteChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='capacity'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Capacity</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={capacityChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='startingTimeMorning'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Starting Time Morning</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={startingTimeMorningChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='startingTimeDay'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Starting Time Day</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={startingTimeDayChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='endTimeMorning'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">End Time Morning</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={endTimeMorningChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='endTimeDay'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">End Time Day</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={endTimeDayChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='1stMemerPickupTimeMorning'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">1st Memebr Pickup Time Morning</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={firststMemerPickupTimeMorningChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='1stMemerPickupTimeDay'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">1st Memebr Pickup Time Day</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={firststMemerPickupTimeDayChange}
          ></TextField>
        </FormControl>
        </div>
        </div>


        </div>
        <div className='lastMemberDropTime'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Last Member Drop Time</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={lastmemerdroptimeChange}
          ></TextField>
        </FormControl>
        </div>
        </div>

        </div>
        <div className='busLeader1'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Leader-1 Name</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={busLeaderOneChange}
          ></TextField>
        </FormControl>
        </div>
        </div>
        </div>


        <div className='busLeader1Contact'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Leader-1 Contact Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={busLeaderOneContactChange}
          type={number}></TextField>
        </FormControl>
        </div>
        </div>
        </div>



        <div className='busLeader2'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Leader-2 Name</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField
          onChange={busLeaderTwoChange}
          ></TextField>
        </FormControl>
        </div>
        </div>
        </div>


        <div className='busLeader1Contact'>
        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Vehicle Leader-2 Contact Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField 
          onChange={busLeaderTwoContactChange}
          type={number}></TextField>
        </FormControl>
        </div>
        </div>
        </div>
        
        
        <div className='shiftB'>
        <div className="epfClass">
        
        </div>

        </div>

        <div className='button'>
        <button type='submit' className='buttonClass'>
          Save
        </button>
        </div>
        
        </form>


        </div>

    </div> 
    </Card>
    </Grid>
    </Grid>
    </MDBox>
    <Footer/>
</DashboardLayout>
  )
}

export default addVehicle






