import React, { useEffect, useState } from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import "./Employee.css"
import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";


function Employee() {
    const [shift, setshift] = useState("0")
    const shiftChange=(e)=>{
        setshift(e.target.value);
        
    }

    const [method, setmethod] = useState('0');
    const methodChange=(e)=>{
        setmethod(e.target.value);
    }

    useEffect(() => {
     if(shift=='0'){
         console.log('1')
     }else{
         console.log("2")
     }
    }, [shift])
    

  return (
      <DashboardLayout>
          <DashboardNavbar/>
          
          <div className='colorBar'>
        <h3 className="title">Add New Employee</h3>
        </div>
        
        <div className="class">
        
        <form className="form" action="">
        
        <div className="formClass">




        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Enter EPF Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>

        <div className="shift">
        <div className="label">
        <label className="labelTitle" htmlFor="">Select Shift</label>
        </div>
        <div className="selectArea">
        <Select
value={method}
onChange={methodChange}
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem value={0} >Select</MenuItem>
          <MenuItem value={1} >A</MenuItem>
          <MenuItem value={2} >B</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>12 Hours</MenuItem>
          <MenuItem value={5}>Genaral</MenuItem>
        </Select>
        </div>
        </div>


<div>
    <h2>Get In To Synergy</h2>
</div>


<div className='method'>
    




        <div className="shift">
        <div className="label">
        <label className="labelTitle" htmlFor="">Select Method</label>
        </div>
        <div className="selectArea">
        <Select
value={shift}
onChange={shiftChange}
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem value={0} >Select</MenuItem>
          <MenuItem value={1} >Bus</MenuItem>
          <MenuItem value={2} >Van</MenuItem>
          <MenuItem value={3}>Bus & Van</MenuItem>
          <MenuItem value={4}>Foot</MenuItem>
          <MenuItem value={5}>Bike</MenuItem>
          <MenuItem value={6}>Other</MenuItem>
        </Select>
        </div>
        </div>
</div>

        <div className="6InBuss">
        <div className="label">
        <label className="labelTitle" htmlFor="">Bus Root</label>
        </div>
        <div className="selectArea">
        <Select
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
        </Select>
        </div>
        </div>

        <div className="2PmOutBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">Van Route</label>
        </div>
        <div className="selectArea">
        <Select
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
        </Select>
        </div>
        </div>

        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Bus Pickup Time</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>



        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Van Pickup Time</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>



        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Bus Pickup Location</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>



        <div className="epfClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Van Pickup Location</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>

        <div>
            <h2>Going From Synergy</h2>
        </div>


        <div className='method'>
    




    <div className="shift">
    <div className="label">
    <label className="labelTitle" htmlFor="">Select Method</label>
    </div>
    <div className="selectArea">
    <Select
value={shift}
onChange={shiftChange}
    className="selectAreaSelect"
    fullWidth sx={{ m: 1 }} variant="outlined">
      <MenuItem value={0} >Select</MenuItem>
      <MenuItem value={1} >Bus</MenuItem>
      <MenuItem value={2} >Van</MenuItem>
      <MenuItem value={3}>Bus & Van</MenuItem>
      <MenuItem value={4}>Foot</MenuItem>
      <MenuItem value={5}>Bike</MenuItem>
      <MenuItem value={6}>Other</MenuItem>
    </Select>
    </div>
    </div>
</div>

    <div className="6InBuss">
    <div className="label">
    <label className="labelTitle" htmlFor="">Bus Root</label>
    </div>
    <div className="selectArea">
    <Select
    className="selectAreaSelect"
    fullWidth sx={{ m: 1 }} variant="outlined">
      <MenuItem>Ten</MenuItem>
      <MenuItem>Twenty</MenuItem>
    </Select>
    </div>
    </div>

    <div className="2PmOutBus">
    <div className="label">
    <label className="labelTitle" htmlFor="">Van Route</label>
    </div>
    <div className="selectArea">
    <Select
    className="selectAreaSelect"
    fullWidth sx={{ m: 1 }} variant="outlined">
      <MenuItem>Ten</MenuItem>
      <MenuItem>Twenty</MenuItem>
    </Select>
    </div>
    </div>

    <div className="epfClass">
    <div className="label">
    <label className="labelTitle" htmlFor="">Bus Dropiing Time</label>
    </div>
    <div className="inputArea">
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <TextField></TextField>
    </FormControl>
    </div>
    </div>



    <div className="epfClass">
    <div className="label">
    <label className="labelTitle" htmlFor="">Van Dropping Time</label>
    </div>
    <div className="inputArea">
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <TextField></TextField>
    </FormControl>
    </div>
    </div>



    <div className="epfClass">
    <div className="label">
    <label className="labelTitle" htmlFor="">Bus Dropping Location</label>
    </div>
    <div className="inputArea">
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <TextField></TextField>
    </FormControl>
    </div>
    </div>



    <div className="epfClass">
    <div className="label">
    <label className="labelTitle" htmlFor="">Van Dropping Location</label>
    </div>
    <div className="inputArea">
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <TextField></TextField>
    </FormControl>
    </div>
    </div>








        </div>

        <div className='button'>
           <button type='submit' className='buttonClass'>Save</button>
         </div>


        </form>

        </div>
      </DashboardLayout>
  )
}

export default Employee