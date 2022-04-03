

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useEffect, useState } from "react";
import axios from "axios";
import BusShiftB from "./components/BusShiftB/BusShiftB";
import { Divider } from "@mui/material";
import ShiftAVan from "./components/ShiftAVan/ShiftAVan";
import ShiftBVan from "./components/ShiftBVan/ShiftBVan";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  
  const [data, setdata] = useState([]);
  const [vehicleData, setvehicleData] = useState([]);

  const loadData=async()=>{
    const response=await axios.get("http://localhost:3001/allemployee");
    const responseVehicleData=await axios.get("http://localhost:3001/allvehicle");
    setvehicleData(responseVehicleData.vehicleData);
    setdata(response.data);
    console.log(vehicleData.length)


    
  }
  useEffect(() => {
    loadData();
  }, [])

 
  
  


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Employees"
                count={data.length}
                percentage={{
                  color: "success",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Total Vehicles"
                count={data.length}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Pending Vehicles"
                count={data.length}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Pending Employee"
                count="91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        
        <MDBox>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <BusShiftB/>
            </Grid>
          </Grid>
          <Divider></Divider>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <ShiftAVan/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <ShiftBVan/>
            </Grid>
          </Grid>
        </MDBox>
        
        
      </MDBox>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
