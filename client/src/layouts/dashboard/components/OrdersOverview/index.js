

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Orders overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              
            </MDTypography>{" "}
            Structure
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Sign Up"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Add New Vehicle"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Add New Employee"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Check Employee List"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Check Vehicle List"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
