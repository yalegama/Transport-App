import React, { useEffect, useState } from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import "./Employee.css"
import { FormControl, Input, InputAdornment, InputLabel, Menu, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ToastContainer, toast } from 'react-toastify';
import MDBox from 'components/MDBox';
import { Card, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material'
import Footer from 'examples/Footer';
import MDTypography from 'components/MDTypography';
import Axios from 'axios';

function Employee() {

// EPF Number

  const [epfnumber, setepfnumber] = useState('')
  const epfChange=(e)=>{
      setepfnumber(e.target.value);
  
      console.log(epfnumber)
  }

  // Shift
    const [shift, setshift] = useState("0")
    const shiftChange=(e)=>{
        setshift(e.target.value);
        }






    // 6 am in method
    const [sixinmethod, setsixinmethod] = useState("1")
    const sixinmethodChange=(e)=>{
      setsixinmethod(e.target.value);
    }
    //6 am in bus route
    const [sixaminbusrooute, setsixaminbusrooute] = useState('0');
    const sixaminbusroouteChange=(e)=>{
      setsixaminbusrooute(e.target.value)
    }

    //6 am in van route
    const [sixaminvanroute, setsixaminvanroute] = useState('');
    const sixaminvanrouteChange=(e)=>{
      setsixaminvanroute(e.target.value)
    }

    // 6 am bus pickup time
    const [sixambuspickuptime, setsixambuspickuptime] = useState('');
    const sixambuspickuptimeChange=(e)=>{
      setsixambuspickuptime(e.target.value);
    }

    // 6 am Van Pickup Time
    const [sixamvanpickuptime, setsixamvanpickuptime] = useState('');
    const sixamvanpickuptimeChange=(e)=>{
      setsixamvanpickuptime(e.target.value);
    }

    // 6am bus pickup location
    const [sixambuspickuplocation, setsixambuspickuplocation] = useState('')
    const sixambuspickuplocationChange=(e)=>{
      setsixambuspickuplocation(e.target.value)
    }

    // 6am Van Pickup location
    const [sixamvanpickuplocation, setsixamvanpickuplocation] = useState('')
    const sixamvanpickuplocationChange=(e)=>{
      setsixamvanpickuplocation(e.target.value)
    }


    //2 pm in Method
    const [twopminmethod, settwopminmethod] = useState('0');
    const twopminmethodChange=(e)=>{
      settwopminmethod(e.target.value);
    }

    //2 pm in bus route
    const [twopminbusroute, settwopminbusroute] = useState('0');
    const twopminbusrouteChange=(e)=>{
      settwopminbusroute(e.target.value)
    }

    //2pm van route
    const [twopminvanroute, settwopminvanroute] = useState('');
    const twopminvanrouteChange=(e)=>{
      settwopminvanroute(e.target.value);
    }

    //2 pm bus pickup time
    const [twopmbuspickuptime, settwopmbuspickuptime] = useState('')
    const twopmbuspickuptimeChange=(e)=>{
      settwopmbuspickuptime(e.target.value);
    }

    //2 pm Van Pickup Time
    const [twopmvanpickuptime, settwopmvanpickuptime] = useState('')
    const twopmvanpickuptimeChange=(e)=>{
      settwopmvanpickuptime(e.target.value);
    }

    //2pm bus pickup Location
    const [twopmbuspickuplocation, settwopmbuspickuplocation] = useState('')
    const twopmbuspickuplocationChange=(e)=>{
      settwopmbuspickuplocation(e.target.value);
    }

    //2pm van pickup location
    const [twopmvanpickuplocation, settwopmvanpickuplocation] = useState('');
    const twopmvanpickuplocationChange=(e)=>{
      settwopmvanpickuplocation(e.target.value)
    }

    //10 pm in
    const [tenpminmethod, settenpminmethod] = useState('0')
    const tenpminmethodChange=(e)=>{
      settenpminmethod(e.target.value);
    }

    //10pm in bus route
    const [tenpminbusroute, settenpminbusroute] = useState('0');
    const tenpminbusrouteChange=(e)=>{
      settenpminbusroute(e.target.value)
    }

    //10 pn in van route
    const [tenpminvanroute, settenpminvanroute] = useState('');
    const tenpminvanrouteChange=(e)=>{
      settenpminvanroute(e.target.value)
    }

    //10 pm Bus Pickup Time
    const [tenpmbuspickuptime, settenpmbuspickuptime] = useState('')
    const tenpmbuspickuptimeChange=(e)=>{
      settenpmbuspickuptime(e.target.value);
    }

    //10 pm van pickup time
    const [tenpmvanpickuptime, settenpmvanpickuptime] = useState('');
    const tenpmvanpickuptimeChange=(e)=>{
      settenpmvanpickuptime(e.target.value)
    }

    //10 pm bus pickup location
    const [tenpmbuspickuplocation, settenpmbuspickuplocation] = useState('');
    const tenpmbuspickuplocationChange=(e)=>{
      settenpmbuspickuplocation(e.target.value)
    }

    //10 pm van pickup location
    const [tenpmvanpickuplocation, settenpmvanpickuplocation] = useState('');
    const tenpmvanpickuplocationChange=(e)=>{
      settenpmvanpickuplocation(e.target.value);
    }    
    //genaral in method
    const [genaralinmethod, setgenaralinmethod] = useState('0');
    const genaralinmethodChange=(e)=>{
      setgenaralinmethod(e.target.value);
    }

    //genaral in bus route
    const [genaralinbusroute, setgenaralinbusroute] = useState('');
    const genaralinbusrouteChange=(e)=>{
      setgenaralinbusroute(e.target.value)
    }

    //genaral in van route
    const [genaralinvanroute, setgenaralinvanroute] = useState('');
    const genaralinvanrouteChange=(e)=>{
      setgenaralinvanroute(e.target.value);
    }

    //Genaral In Bus pIckup time
    const [genaralinbuspicuptime, setgenaralinbuspicuptime] = useState('');
    const genaralinbuspicuptimeChange=(e)=>{
      setgenaralinbuspicuptime(e.target.value);
    }

    //Genaral In Van Pickup Time
    const [genaralinvanpickuptime, setgenaralinvanpickuptime] = useState('');
    const genaralinvanpickuptimeChange=(e)=>{
      setgenaralinvanpickuptime(e.target.value);
    }

    // Genaral in Bus pickup Location
    const [genaralinbuspickuplocation, setgenaralinbuspickuplocation] = useState('');
    const genaralinbuspickuplocationChange=(e)=>{
      setgenaralinbuspickuplocation(e.target.value)
    }

    //Genaral Van Pickup Location
    const [genaralinvanpicuplocation, setgenaralinvanpicuplocation] = useState('');
    const genaralinvanpicuplocationChange=(e)=>{
      setgenaralinvanpicuplocation(e.target.value);
    }

    //6 pm in method
    const [sixpminmethod, setsixpminmethod] = useState('0');
    const sixpminmethodChange=(e)=>{
      setsixpminmethod(e.target.value);
    }

    //6 pm in bus route

    const [sixpminbusroute, setsixpminbusroute] = useState('0');
    const sixpminbusrouteChange=(e)=>{
      setsixpminbusroute(e.target.value);
    }

    //6pm in van route

    const [sixpminvanroute, setsixpminvanroute] = useState('0');
    const sixpminvanrouteChange=(e)=>{
      setsixpminvanroute(e.target.value)
    }

    // 6 pm bus pickup time
    const [sixpminbuspickuptime, setsixpminbuspickuptime] = useState('')
    const sixpminbuspickuptimeChannge=(e)=>{
      setsixpminbuspickuptime(e.target.value)
    }

    //6 pm van pickup time
    const [sixpminvanpickuptime, setsixpminvanpickuptime] = useState('');
    const sixpminvanpickuptimeChange=(e)=>{
      setsixpminvanpickuptime(e.target.value)
    }

    //6 pm in bus pickup location
    const [sixpminbuspickuplocation, setsixpminbuspickuplocation] = useState('')
    const sixpminbuspickuplocationChange=(e)=>{
      setsixpminbuspickuplocation(e.target.value)
    }

    //6pm in van pickup location
    const [sixpminvanpickuplocation, setsixpminvanpickuplocation] = useState('');
    const sixpminvanpickuplocationChange=(e)=>{
      setsixpminvanpickuplocation(e.target.value)
    }


      // /////////////2 pm out 

      // 2 pm out method
      const [twopmoutmethod, settwopmoutmethod] = useState('0');
      const twopmoutmethodChange=(e)=>{
        settwopmoutmethod(e.target.value)
      }

      //2pm out bus route
      const [twopmoutbusroute, settwopmoutbusroute] = useState('0');
      const twopmoutbusrouteChange=(e)=>{
        settwopmoutbusroute(e.target.value)
      }

      //2 pm out van route
      const [twopmoutvanroute, settwopmoutvanroute] = useState("");
      const twopmoutvanrouteChange=(e)=>{
        twopmoutvanrouteChange(e.target.value);
      }


      //2 pm Bus Pickup time
      const [twopmoutbuspickuptime, settwopmoutbuspickuptime] = useState('')
      const twopmoutbuspickuptimeChange=(e)=>{
        settwopmoutbuspickuptime(e.target.value)
      }

      //2pm out van pickup time
      const [twopmoutvanpickuptime, settwopmoutvanpickuptime] = useState('');
      const twopmoutvanpickuptimeChange=(e)=>{
        settwopmoutvanpickuptime(e.target.value)
      }

      //2 pm bus pickup location
      const [twopmoutbuspickuplocation, settwopmoutbuspickuplocation] = useState('');
      const twopmoutbuspickuplocationChange=(e)=>{
        settwopmoutbuspickuplocation(e.target.value)
      }

      //2 pm out van pickup location
      const [twopmoutvanpickuplocation, settwopmoutvanpickuplocation] = useState('');
      const twopmoutvanpickuplocationChange=(e)=>{
        settwopmoutvanpickuplocation(e.target.value);
      }


      //10 pm out method
      const [tenpmoutmethod, settenpmoutmethod] = useState('0');
      const tenpmoutmethodChange=(e)=>{
        settenpmoutmethod(e.target.value)
      }

      //10 pm out bus route
      const [tenpmoutbusroute, settenpmoutbusroute] = useState("0");
      const tenpmoutbusrouteChange=(e)=>{
        settenpmoutbusroute(e.target.value)
      }

      //10 pm out van route
      const [tenpmoutvanroute, settenpmoutvanroute] = useState('0');
      const tenpmoutvanrouteChange=(e)=>{
        settenpmoutvanroute(e.target.value)
      }

      //10 pm out bus pickup time
      const [tenpmoutbuspicuptime, settenpmoutbuspicuptime] = useState('');
      const tenpmoutbuspicuptimeChange=(e)=>{
        settenpmoutbuspicuptime(e.target.value)
      }

      // 10 pm out van pickup time
      const [tenpmoutvanpickuptime, settenpmoutvanpickuptime] = useState('');
      const tenpmoutvanpickuptimeChange=(e)=>{
        settenpmoutvanpickuptime(e.target.value)
      }

      //10 pm out pickup location
      const [tenpmoutbuspickuplocation, settenpmoutbuspickuplocation] = useState('');
      const tenpmoutbuspickuplocationChange=(e)=>{
        settenpmoutbuspickuplocation(e.target.value)
      }

      //10 pm out pickup location
      const [tenpmoutvanpickuplocation, settenpmoutvanpickuplocation] = useState('');
      const tenpmoutvanpickuplocationChange=(e)=>{
        settenpmoutvanpickuplocation(e.target.value)
      }

      //5am out method

      const [fiveamoutmethod, setfiveamoutmethod] = useState('0');
      const fiveamoutmethodChange=(e)=>{
        setfiveamoutmethod(e.target.value)
      }

      //5 am out bus route

      const [fiveamoutbusroute, setfiveamoutbusroute] = useState('0');
      const fiveamoutbusrouteChange=(e)=>{
        setfiveamoutbusroute(e.target.value)
      }

      //5 am out van route
      const [fiveamoutvanroute, setfiveamoutvanroute] = useState('0');
      const fiveamoutvanrouteChange=(e)=>{
        setfiveamoutvanroute(e.target.value)
      }

      //5am out bus pickup time

      const [fiveamoutbuspickuptime, setfiveamoutbuspickuptime] = useState('');
      const fiveamoutbuspickuptimeChange=(e)=>{
        setfiveamoutbuspickuptime(e.target.value)
      }

      //5am out van pickup time
      const [fiveamoutvanpickuptime, setfiveamoutvanpickuptime] = useState('');
      const fiveamoutvanpickuptimeChange=(e)=>{
        setfiveamoutvanpickuptime(e.target.value)
      }

      //5 am bus pickup location
      const [fiveamoutbuspickuplocation, setfiveamoutbuspickuplocation] = useState('');
      const fiveamoutbuspickuplocationChange=(e)=>{
        setfiveamoutbuspickuplocation(e.target.value);
      }

      //5 am van pickup location
      const [fiveamoutvanpickuplocation, setfiveamoutvanpickuplocation] = useState('');
      const fiveamoutvanpickuplocationChange=(e)=>{
        setfiveamoutvanpickuplocation(e.target.value);
      }

      //genaral out method
      const [genaraloutmethod, setgenaraloutmethod] = useState('0');
      const genaraloutmethodChange=(e)=>{
        setgenaraloutmethod(e.target.value)
      }

      //genaral out bus route

      const [genaraloutbusroute, setgenaraloutbusroute] = useState('0');
      const genaraloutbusrouteChange=(e)=>{
        setgenaraloutbusroute(e.target.value)
      }

      //genaral out van route
      const [genaraloutvanroute, setgenaraloutvanroute] = useState('0');
      const genaraloutvanrouteChange=(e)=>{
        setgenaraloutvanroute(e.target.value)
      }

      //ganaral out bus pickup Time

      const [genaraloutbuspickuptime, setgenaraloutbuspickuptime] = useState('');
      const genaraloutbuspickuptimeChange=(e)=>{
        setgenaraloutbuspickuptime(e.target.value)
      }

      //genaral out van pickup time
      const [genaraloutvanpickuptime, setgenaraloutvanpickuptime] = useState('');
      const genaraloutvanpickuptimeChange=(e)=>{
        setgenaraloutvanpickuptime(e.target.value);
      }

      //Genaral Out Bus Pickup Location
      const [genaraloutbuspickuplocation, setgenaraloutbuspickuplocation] = useState('');
      const genaraloutbuspickuplocationChange=(e)=>{
        setgenaraloutbuspickuplocation(e.target.value)
      }

      //genaral out van pickup location
      const [genaraloutvanpickuplocation, setgenaraloutvanpickuplocation] = useState('');
      const genaraloutvanpickuplocationChange=(e)=>{
        setgenaraloutvanpickuplocation(e.target.value);
      }

      //6 am out method
      const [sixamoutmethod, setsixamoutmethod] = useState('');
      const sixamoutmethodChange=(e)=>{
        setsixamoutmethod(e.target.value)
      }

      //6am out bus route
      const [sixamoutbusroute, setsixamoutbusroute] = useState("0");
      const sixamoutbusrouteChange=(e)=>{
        setsixamoutbusroute(e.target.value)
      }

      //6 am out van route
      const [sixamoutvanroute, setsixamoutvanroute] = useState('0');
      const sixamoutvanrouteChange=(e)=>{
        setsixamoutvanroute(e.target.value);
      }

      //6 am out bus pickup time
      const [sixamoutbuspickuptime, setsixamoutbuspickuptime] = useState('');
      const sixamoutbuspickuptimeChange=(e)=>{
        setsixamoutbuspickuptime(e.target.value);
      }
      //// 6 am out van pickup time
      const [sixamoutvanpickuptime, setsixamoutvanpickuptime] = useState('');
      const sixamoutvanpickuptimeChange=(e)=>{
        setsixamoutvanpickuptime(e.target.value)
      }

      //6 am out bus pickup location
      const [sixamoutbuspickuplocation, setsixamoutbuspickuplocation] = useState('');
      const sixamoutbuspickuplocationChange=(e)=>{
        setsixamoutbuspickuplocation(e.target.value);
      }

      //6 am out van pickup location
      const [sixamoutvanpickuplocation, setsixamoutvanpickuplocation] = useState('')
      const sixamoutvanpickuplocationChange=(e)=>{
        setsixamoutvanpickuplocation(e.target.value)
      }
    const handleChange=(e)=>{
toast.success("Success");
Axios.post('http://localhost:3001/addemployee',{
  epfnumber:epfnumber,
  shift:shift,
  sixinmethod:sixinmethod,
  sixaminbusrooute:sixaminbusrooute,
  sixaminvanroute:sixaminvanroute,
  sixambuspickuptime:sixambuspickuptime,
  sixamvanpickuptime:sixamvanpickuptime,
  sixambuspickuplocation :sixambuspickuplocation ,
  sixamvanpickuplocation:sixamvanpickuplocation,
  twopminmethod:twopminmethod,
  twopminbusroute :twopminbusroute ,
  twopminvanroute:twopminvanroute,
  twopmbuspickuptime:twopmbuspickuptime,
  twopmvanpickuptime :twopmvanpickuptime ,
  twopmbuspickuplocation:twopmbuspickuplocation,
  twopmvanpickuplocation:twopmvanpickuplocation,
  tenpminmethod :tenpminmethod ,
  tenpminbusroute:tenpminbusroute,
  tenpminvanroute :tenpminvanroute ,
  tenpmbuspickuptime:tenpmbuspickuptime,
  tenpmvanpickuptime :tenpmvanpickuptime ,
  tenpmbuspickuplocation :tenpmbuspickuplocation ,
  tenpmvanpickuplocation : 	tenpmvanpickuplocation ,
  genaralinmethod:genaralinmethod,
  genaralinbusroute:genaralinbusroute,
  genaralinvanroute :genaralinvanroute ,
  genaralinbuspicuptime :genaralinbuspicuptime ,
  genaralinvanpickuptime :genaralinvanpickuptime ,
  genaralinbuspickuplocation:genaralinbuspickuplocation,
  genaralinvanpicuplocation:genaralinvanpicuplocation,
  sixpminmethod:sixpminmethod,
  sixpminbusroute:sixpminbusroute,
  sixpminvanroute:sixpminvanroute,
  sixpminbuspickuptime:sixpminbuspickuptime,
  sixpminvanpickuptime:sixpminvanpickuptime,
  sixpminbuspickuplocation :sixpminbuspickuplocation ,
  sixpminvanpickuplocation:sixpminvanpickuplocation,
  twopmoutmethod:twopmoutmethod,
  twopmoutbusroute :twopmoutbusroute ,
  twopmoutvanroute :twopmoutvanroute ,
  twopmoutbuspickuptime:twopmoutbuspickuptime,
  twopmoutvanpickuptime :twopmoutvanpickuptime ,
  twopmoutbuspickuplocation:twopmoutbuspickuplocation,
  twopmoutvanpickuplocation:twopmoutvanpickuplocation,
  tenpmoutmethod:tenpmoutmethod,
  tenpmoutbusroute:tenpmoutbusroute,
  tenpmoutvanroute :tenpmoutvanroute ,
  tenpmoutbuspicuptime :tenpmoutbuspicuptime ,
  tenpmoutvanpickuptime :tenpmoutvanpickuptime ,

})


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
    <tr >Factory In</tr>
   <div className='table1'>
   <tr>
      <th rowSpan="6">6 am IN</th>
      <th  colSpan="2">Method</th>
    </tr>
    <tr className='method'>
      <th colSpan="2">
        <Select
        value={sixinmethod}
        onChange={sixinmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route</th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={sixaminbusrooute}
        onChange={sixaminbusroouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="daraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
      <Select
      value={sixaminvanroute}
      onChange={sixaminvanrouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="daraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl className='formControl'>
          <TextField
          onChange={sixambuspickuptimeChange}
          fullWidth sx={{m:0}} placeholder='Bus Pickup Time'></TextField>
        </FormControl>
      </th>
      <th colSpan="1" >
      <FormControl className='formControl'>
          <TextField 
          onChange={sixamvanpickuptimeChange}
          fullWidth sx={{m:0}} placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th>
      <FormControl className='formControl'>
          <TextField 
          onChange={sixambuspickuplocationChange}
          fullWidth sx={{m:0}} placeholder='Bus Pickup Location'></TextField>
        </FormControl>
      </th>
      <th>
      <FormControl className='formControl'>
          <TextField 
          onChange={sixamvanpickuplocationChange}
          fullWidth sx={{m:0}} placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">2 pm IN</th>
      <th colSpan="2">Method</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={twopminmethod}
      onChange={twopminmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route </th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={twopminbusroute}
        onChange={twopminbusrouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="daraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
      <Select
      value={twopminvanroute}
      onChange={twopminvanrouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="daraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={twopmbuspickuptimeChange}
          placeholder='Bus Pickup Time'></TextField>
        </FormControl>
       </th>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={twopmvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField 
          onChange={twopmbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
      </th>
      <th>
        <FormControl>
          <TextField
          onChange={twopmvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">10 pm IN</th>
      <th colSpan="2">Method</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={tenpminmethod}
      onChange={tenpminmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route</th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={tenpminbusroute}
        onChange={tenpminbusrouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="daraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="daraniyagala">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
      <Select
      value={tenpminvanroute}
      onChange={tenpminvanrouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="daraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="daraniyagala">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
      <FormControl>
        <TextField
        onChange={tenpmbuspickuptimeChange}
        placeholder='Bus Pickup Time'></TextField>
      </FormControl>
       </th>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={tenpmvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField
          onChange={tenpmbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
         </th>
      <th>
        <FormControl>
          <TextField 
          onChange={tenpmvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time In</th>
      <th colSpan="2">Genaral</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={genaralinmethod}
      onChange={genaralinmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route </th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={genaralinbusroute}
        onChange={genaralinbusrouteChange}
                className='factoryinselect'
                fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
      <Select
      value={genaralinvanroute}
      onChange={genaralinvanrouteChange}
                className='factoryinselect'
                fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Daraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
      <FormControl>
        <TextField 
        onChange={genaralinbuspicuptimeChange}
        placeholder='Bus Pickup Time'></TextField>
      </FormControl>
       </th>
      <th colSpan="1" >
        <FormControl>
          <TextField
          onChange={genaralinvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
      <FormControl>
        <TextField 
        onChange={genaralinbuspickuplocationChange}
        placeholder='Bus Pickup Location'></TextField>
      </FormControl>
       </th>
      <th>
        <FormControl>
          <TextField
          onChange={genaralinvanpicuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>

   <div className='table1'>
     
   <tr>
      <th rowSpan="6">6 pm IN</th>
      <th colSpan="2">Methods</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={sixpminmethod}
      onChange={sixpminmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route</th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={sixpminbusroute}
        onChange={sixpminbusrouteChange}
                className='factoryinselect'
                fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
        <Select
        value={sixpminvanroute}
        onChange={sixpminvanrouteChange}
                        className='factoryinselect'
                        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Daraniyagala</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={sixpminbuspickuptimeChannge}
          placeholder='Bus Pickup Time'></TextField>
        </FormControl>
      </th>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={sixpminvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
      <FormControl>
        <TextField
        onChange={sixpminbuspickuplocationChange}
        placeholder='Bus Pickup Location'></TextField>
      </FormControl>
       </th>
      <th>
        <FormControl>
          <TextField
          onChange={sixpminvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
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
      <th rowSpan="6">2 pm Out</th>
      <th colSpan="2">Method</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={twopmoutmethod}
      onChange={twopmoutmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route</th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={twopmoutbusroute}
        onChange={twopmoutbusrouteChange}
                className='factoryinselect'
                fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
        <Select
        value={twopmoutvanroute}
        onChange={twopmoutvanrouteChange}
                        className='factoryinselect'
                        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={twopmoutbuspickuptimeChange}
          placeholder='Bus Pickup time'></TextField>
        </FormControl>
      </th>
      <th colSpan="1" >
        <FormControl>
          <TextField
          onChange={twopmoutvanpickuptimeChange}
          placeholder='Van Pickup time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField
          onChange={twopmoutbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
         </th>
      <th>
        <FormControl>
          <TextField
          onChange={twopmoutvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>

   <div className='table1'>
   <tr>
      <th rowSpan="6">10 pm Out</th>
      <th colSpan="2">Method</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select

      value={tenpmoutmethod}
      onChange={tenpmoutmethodChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value={"method"}> Method</MenuItem>
          <MenuItem value={"bus"}>Bus</MenuItem>
          <MenuItem value={"van"}>Van</MenuItem>
          <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
          <MenuItem value={"foot"}>Foot</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route</th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={tenpmoutbusroute}
        onChange={tenpmoutbusrouteChange}
                className='factoryinselect'
                fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
        <Select
        value={tenpmoutvanroute}
        onChange={tenpmoutvanrouteChange}
                        className='factoryinselect'
                        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galligamuwa"> Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={tenpmoutbuspicuptimeChange}
          placeholder='Bus Pickup Time'></TextField>
        </FormControl>
         </th>
      <th colSpan="1" >
        <FormControl>
          <TextField  
          onChange={tenpmoutvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField 
          onChange={tenpmoutbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
      </th>
      <th>
        <FormControl>
          <TextField 
          onChange={tenpmoutvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>



   <div className='table1'>
   <tr>
      <th rowSpan="6">5 am Out</th>
      <th colSpan="2">Method</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={fiveamoutmethod}
      onChange={fiveamoutmethodChange}
  className='factoryinselect'
  fullWidth sx={{m:0}} variant="outlined"
  >
    <MenuItem value={"method"}> Method</MenuItem>
    <MenuItem value={"bus"}>Bus</MenuItem>
    <MenuItem value={"van"}>Van</MenuItem>
    <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
    <MenuItem value={"foot"}>Foot</MenuItem>
    <MenuItem value={"bike"}>Bike</MenuItem>
    <MenuItem value={"other"}>Other</MenuItem>
  </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route</th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={fiveamoutbusroute}
        onChange={fiveamoutbusrouteChange}
        className='factoryinselect'
        fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
        <Select
        value={fiveamoutvanroute}
        onChange={fiveamoutvanrouteChange}
          className='factoryinselect'
          fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={fiveamoutbuspickuptimeChange}
          placeholder='Bus Pickup Time'></TextField>
        </FormControl>
         </th>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={fiveamoutvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField 
          onChange={fiveamoutbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
         </th>
      <th>
        <FormControl>
          <TextField
          onChange={fiveamoutvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>


   <div className='table1'>
   <tr>
      <th rowSpan="6">Time</th>
      <th colSpan="2">Genaral</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={genaraloutmethod}
      onChange={genaraloutmethodChange}
  className='factoryinselect'
  fullWidth sx={{m:0}} variant="outlined"
  >
    <MenuItem value={"method"}> Method</MenuItem>
    <MenuItem value={"bus"}>Bus</MenuItem>
    <MenuItem value={"van"}>Van</MenuItem>
    <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
    <MenuItem value={"foot"}>Foot</MenuItem>
    <MenuItem value={"bike"}>Bike</MenuItem>
    <MenuItem value={"other"}>Other</MenuItem>
  </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route </th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select
        value={genaraloutbusroute}
        onChange={genaraloutbusrouteChange}
          className='factoryinselect'
          fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
      <th>
      <Select
      value={genaraloutvanroute}
      onChange={genaraloutvanrouteChange}
          className='factoryinselect'
          fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>
        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >
        <FormControl>
          <TextField
          onChange={genaraloutbuspickuptimeChange}
          placeholder='Bus Pickup Time'></TextField>
        </FormControl>
         </th>
      <th colSpan="1" >
        <FormControl>
          <TextField 
          onChange={genaraloutvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField 
          onChange={genaraloutbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
         </th>
      <th>
        <FormControl>
          <TextField 
          onChange={genaraloutvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
    </tr>
   
   </div>

{/* table5 */}
   <div className='table1'>
     
   <tr>
      <th rowSpan="6">6 am Out</th>
      <th colSpan="2">Method</th>
    </tr>
    <tr>
      <th colSpan="2">
      <Select
      value={sixamoutmethod}
      onChange={sixamoutmethodChange}
  className='factoryinselect'
  fullWidth sx={{m:0}} variant="outlined"
  >
    <MenuItem value={"method"}> Method</MenuItem>
    <MenuItem value={"bus"}>Bus</MenuItem>
    <MenuItem value={"van"}>Van</MenuItem>
    <MenuItem value={"busandvan"}>Bus & Van</MenuItem>
    <MenuItem value={"foot"}>Foot</MenuItem>
    <MenuItem value={"bike"}>Bike</MenuItem>
    <MenuItem value={"other"}>Other</MenuItem>
  </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" >Bus Route </th>
      <th colSpan="1" >Van Route</th>
    </tr>
    <tr>
      <th>
        <Select 
        value={sixamoutbusroute}
        onChange={sixamoutbusrouteChange}
          className='factoryinselect'
          fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>

        </Select>
      </th>
      <th>
      <Select 
          className='factoryinselect'
          fullWidth sx={{m:0}} variant="outlined"
        >
          <MenuItem value="deraniyagala">Deraniyagala</MenuItem>
          <MenuItem value="galigamuwa">Galigamuwa</MenuItem>

        </Select>
      </th>
    </tr>
    <tr>
      <th colSpan="1" > 
      <FormControl>
        <TextField 
        onChange={sixamoutbuspickuptimeChange}
        placeholder='Bus Pickup Time'></TextField>
      </FormControl>
      </th>
      <th colSpan="1" >
        <FormControl>
          <TextField
          onChange={sixamoutvanpickuptimeChange}
          placeholder='Van Pickup Time'></TextField>
        </FormControl>
      </th>
    </tr>
    <tr>
      <th> 
        <FormControl>
          <TextField
          onChange={sixamoutbuspickuplocationChange}
          placeholder='Bus Pickup Location'></TextField>
        </FormControl>
         </th>
      <th>
        <FormControl>
          <TextField 
          onChange={sixamoutvanpickuplocationChange}
          placeholder='Van Pickup Location'></TextField>
        </FormControl>
      </th>
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