const express=require('express');
const app=express();
const bodyparse=require('body-parser');
const cors=require('cors');
const mysql=require('mysql');
const PORT=process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyparse.urlencoded({extended:true}));


const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'transport'
})


// app.get("/",(req,res)=>{
//     const sqlInsert="INSERT INTO test(name,age) VALUES('Yalegama','6')";
//     db.query(sqlInsert,(err,result)=>{
//         console.log("err",err);
//         console.log("result",result)
//     })
// });

// app.get('/api/get',(req,res)=>{
//     const sqlGet="SELECT * FROM test";
//     db.query(sqlGet,(err,result)=>{
//         res.send(result)
//     })
// })

app.post('/test',(req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
    console.log(name)
    const testvalue=("INSERT INTO test(name,password) VALUES (?,?)");
    db.query(testvalue,[name,password],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
        }
    })
})

app.post('/addvehicle',(req,res)=>{
    const shift=req.body.shift;
    const vehicletype=req.body.vehicletype;
    const vehicleroute=req.body.vehicleroute;
    const drivername=req.body.drivername;
    const drivercontactnumber=req.body.drivercontactnumber;
    const driverlicensenumber=req.body.driverlicensenumber;
    const vehiclenumber=req.body.vehiclenumber;
    const kmperoneroute=req.body.kmperoneroute;
    const capacity=req.body.capacity;
    const startingtimemorning=req.body.startingtimemorning;
    const startingtimeday=req.body.startingtimeday;
    const endtimemorning=req.body.endtimemorning;
    const endtimeday=req.body.endtimeday;
    const firstmemerpickuptimemorning=req.body.firstmemerpickuptimemorning;
    const firstmemerpickuptimeday=req.body.firstmemerpickuptimeday;
    const lastmemerdroptime=req.body.lastmemerdroptime;
    const vehicleleaderonename=req.body.vehicleleaderonename;
    const vehicleleaderonecontactnumber=req.body.vehicleleaderonecontactnumber;
    const vehicleleadertwoname=req.body.vehicleleadertwoname;
    const vehicleleadertwocontactnumber=req.body.vehicleleadertwocontactnumber;
    
    // db.query('INSERT INTO addvehicle(shift,vehicletype,vehicleroute,drivername,drivercontactnumber,driverlicensenumber,vehiclenumber,kmperoneroute,capacity,startingtimemorning,startingtimeday,endtimemorning,endtimeday,firstmemerpickuptimemorning,firstmemerpickuptimeday,lastmemerdroptime,vehicleleaderonename,vehicleleaderonecontactnumber,vehicleleadertwoname,vehicleleadertwocontactnumber) VALUES ('','',)',[])

    const sqlValues="INSERT INTO addvehicle(shift,vehicletype,vehicleroute,drivername,drivercontactnumber,driverlicensenumber,vehiclenumber,kmperoneroute,capacity,startingtimemorning,startingtimeday,endtimemorning,endtimeday,firstmemerpickuptimemorning,firstmemerpickuptimeday,lastmemerdroptime,vehicleleaderonename,vehicleleaderonecontactnumber,vehicleleadertwoname,vehicleleadertwocontactnumber) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlValues,[shift,vehicletype,vehicleroute,drivername,drivercontactnumber,driverlicensenumber,vehiclenumber,kmperoneroute,capacity,startingtimemorning,startingtimeday,endtimemorning,endtimeday,firstmemerpickuptimemorning,firstmemerpickuptimeday,lastmemerdroptime,vehicleleaderonename,vehicleleaderonecontactnumber,vehicleleadertwoname,vehicleleadertwocontactnumber],(err,result)=>{
        if(err){
            console.log("Your Error is",err);
        }else{
            console.log("Your are succesfull")
        }
    })

})

app.listen(PORT,(req,res)=>{
    console.log(`Server is started on ${PORT}`);
})
//,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
//,vehicleroute,drivername,drivercontactnumber,driverlicensenumber,vehiclenumber,kmperoneroute,capacity,startingtimemorning,startingtimeday,endtimemorning,endtimeday,firstmemerpickuptimemorning,firstmemerpickuptimeday,lastmemerdroptime,vehicleleaderonename,vehicleleaderonecontactnumber,vehicleleadertwoname,vehicleleadertwocontactnumber



//post data to  addemployeetobus data table
app.post("/addemployeetobus",(req,res)=>{
    const transporttype=req.body.transporttype;
    const shift=req.body.shift;
    const route=req.body.route;
    const epfnumber=req.body.epfnumber;
    const name=req.body.name;
    const pickuppoint=req.body.pickuppoint;
    const pickuptime=req.body.pickuptime;
    const droptime=req.body.droptime;
    const vanroute=req.body.vanroute;

    const employeeBus="INSERT INTO addemployeetobus(transporttype,shift,route,epfnumber,name,pickuppoint,pickuptime,droptime,vanroute) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(employeeBus,[transporttype,shift,route,epfnumber,name,pickuppoint,pickuptime,droptime,vanroute],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})

//post data to addemployeetovan data table
app.post("/addemployeetovan",(req,res)=>{
    const transporttype=req.body.transporttype;
    const shift=req.body.shift;
    const transportroute=req.body.transportroute;
    const epfnumber=req.body.epfnumber;
    const name=req.body.name;
    const pickuppoint=req.body.pickuppoint;
    const pickuptime=req.body.pickuptime;
    const droptime=req.body.droptime;
    const employeeVan=("INSERT INTO addemployeetovan(transporttype,shift,transportroute,epfnumber,name,pickuppoint,pickuptime,droptime) VALUES (?,?,?,?,?,?,?,?)");
    db.query(employeeVan,[transporttype,shift,transportroute,epfnumber,name,pickuppoint,pickuptime,droptime],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
        }
    })
})


//get all employee
app.get("/allemployee",(req,res)=>{
    const getallemployee="SELECT * FROM addemployeetobus";
    db.query(getallemployee,(err,result)=>{
        res.send(result)
    })
})

//get all vehicles
app.get("/allvehicle",(req,res)=>{
    const getallvehicle="SELECT * FROM addvehicle";
    db.query(getallvehicle,(err,result)=>{
        res.send(result);
    })
})

app.get("/shifta",(req,res)=>{
    const getshiftaData="SELECT * FROM addvehicle WHERE shift in('shiftA') and  vehicletype in('Bus')";
    db.query(getshiftaData,(err,result)=>{
        res.send(result);
    })
});

app.get("/shiftb",(req,res)=>{
    const getshiftbData="SELECT * FROM addvehicle WHERE shift in('shiftB') and  vehicletype in('Bus')";
    db.query(getshiftbData,(err,result)=>{
        res.send(result);
    })
})

app.get("/shiftavan",(req,res)=>{
    const getshiftAVanData="SELECT * FROM addvehicle WHERE shift in('shiftA') and  vehicletype in('Van')";
    db.query(getshiftAVanData,(err,result)=>{
        res.send(result);
    })
})

app.get("/shiftbvan",(req,res)=>{
    const getshiftBVanData="SELECT * FROM addvehicle WHERE shift in('shiftB') and  vehicletype in('Van')";
    db.query(getshiftBVanData,(err,result)=>{
        res.send(result);
    })
})

app.get("/allroutes",(req,res)=>{
    const allBusRoutes="SELECT vehicleroute FROM addvehicle";
    db.query(allBusRoutes,(err,result)=>{
        res.send(result);
    })
})

app.post("/addemployee",(req,res)=>{
    const transporttype=req.body.transporttype;
    const shift=req.body.shift;
    const route=req.body.route;
    const epfnumber=req.body.epfnumber;
    const name=req.body.name;
    const pickuppoint=req.body.pickuppoint;
    const pickuptime=req.body.pickuptime;
    const droptime=req.body.droptime;
    const vanroute=req.body.vanroute;

    const employeeBus="INSERT INTO addemployeetobus(transporttype,shift,route,epfnumber,name,pickuppoint,pickuptime,droptime,vanroute) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(employeeBus,[transporttype,shift,route,epfnumber,name,pickuppoint,pickuptime,droptime,vanroute],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})

app.get("/allemployeeinmas",(req,res)=>{
    const allBusRoutes="SELECT * FROM employee";
    db.query(allBusRoutes,(err,result)=>{
        res.send(result);
    })
})