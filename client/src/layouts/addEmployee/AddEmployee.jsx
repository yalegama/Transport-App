import "./AddEmployee.css";
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react';
import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";



function AddEmployee() {
  return (
    <DashboardLayout>
        <DashboardNavbar />
        <div className='colorBar'>
        <h3 className="title">Add New Employee</h3>
        </div>
        
        <div className="class">
        
        <form className="form" action="">
        
        <div className="formClass">


        <div className="6InBuss">
        <div className="label">
        <label className="labelTitle" htmlFor="">6am In Bus</label>
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
        <label className="labelTitle" htmlFor="">Enter EPF Number</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>

        <div className="nameClass">

        <div className="label">
        <label className="labelTitle" htmlFor="">Enter Name</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>

        </div>

        <div className="teamClass">
        <div className="label">
        <label className="labelTitle" htmlFor="">Enter Team</label>
        </div>
        <div className="inputArea">
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField></TextField>
        </FormControl>
        </div>
        </div>

        <div className="6InBuss">
        <div className="label">
        <label className="labelTitle" htmlFor="">6am In Bus</label>
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
        <label className="labelTitle" htmlFor="">2pm Out Bus</label>
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

        <div className="2PmInBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">2pm In Bus</label>
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

        <div className="10PmOutBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">10pm Out Bus</label>
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

        <div className="10PmInBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">10pm In Bus</label>
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

        <div className="6AmOutBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">6am Out Bus</label>
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

        <div className="720InBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">7.20am In Bus</label>
        </div>
        <div className="selectArea">
        <Select 
        className="selectAreaSelect"
        fullWidth sx={{ m: 1 }} variant="outlined">
          <MenuItem></MenuItem>
        </Select>
        </div>
        </div>

        <div className="520OutBus">
        <div className="label">
        <label className="labelTitle" htmlFor="">5.20pm Out Bus</label>
        </div>
        c
        </div>

        <div className="Shift"></div>

        <div className="Area"></div>

        </div>

        </form>

        </div>
        
    </DashboardLayout>
  )
}

export default AddEmployee