
/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import AddEmployee from "layouts/addEmployee/AddEmployee";
import AddVehicle from "layouts/addVehicle/AddVehicle";
import AddEmployeeToBus from "layouts/addEmployeeToBus/AddEmployeeToBus";
import AddEmployeeToVan from "layouts/addEmployeetoVan/AddEmployeeToVan";
import AllEmployee from "layouts/allEmployee/AllEmployee";
import AllVehicle from "layouts/allVehicle/AllVehicle";
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Add Employee To Bus",
    key: "employeed",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/add/employee/to/bus",
    component: <AddEmployeeToBus/>,
  },
  {
    type: "collapse",
    name: "Add New Vehicle",
    key: "vehicle",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/add/vehicle",
    component: <AddVehicle/>,
  },
  
  {
    type: "collapse",
    name: "All Employees",
    key: "employees",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/all/employee",
    component: <AllEmployee />,
  },
  {
    type: "collapse",
    name: "All Vehicles",
    key: "vehicles",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/all/vehicles",
    component: <AllVehicle />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Calander",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
 
];

export default routes;
