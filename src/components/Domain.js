import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useWindowDimensions from "../Utils/dimention";
import Background from "../tabs/Background";
import ResearchGap from "../tabs/ResearchGap";
import ResearchObjectives from "../tabs/ResearchObjectives";
import ResearchProblem from "../tabs/ResearchProblem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Domain() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const { height } = useWindowDimensions();

  return (
    <Box
      sx={{ minHeight:height, bgcolor: "#232D3F" }}
      p={{ sm: 0.5, md: 2, lg: 4 }}
      id="Domain"
    >
      <div className="text-[#4477CE] font-semibold text-2xl text-center font-[roboto] pt-10">
        Our Domain
      </div>
      <hr className=" border-[#4477CE] mt-2"/>
      <div className="flex flex-1 items-center justify-center mt-3">
        <Box sx={{ width: { xs: "100%", md: "90%", lg: "80%" } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            sx={{}}
          >
            <Tab sx={{fontSize:{xs:10,md:15},textTransform:"none",color:"#fff"}} label="Background" {...a11yProps(0)} />
            <Tab sx={{fontSize:{xs:10,md:15},textTransform:"none",color:"#fff"}} label="Research Gap" {...a11yProps(1)} />
            <Tab sx={{fontSize:{xs:10,md:15},textTransform:"none",color:"#fff"}} label="Research Problem" {...a11yProps(2)} />
            <Tab sx={{fontSize:{xs:10,md:15},textTransform:"none",color:"#fff"}} label="Research Objective" {...a11yProps(2)} />
          </Tabs>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Background />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ResearchGap />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <ResearchProblem />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <ResearchObjectives />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </div>
    </Box>
  );
}
