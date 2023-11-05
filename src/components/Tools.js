import React from "react";
import useWindowDimensions from "../Utils/dimention";
import { Box, Grid } from "@mui/material";

const tools = ["tool1", "tool2", "tool3", "tool4", "tool3", "tool3"];

export default function Tools() {
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{ minHeight: height }}
      id="Tools%20&%20Technology"
      p={{ xs: 0.5, md: 1, lg: 2 }}
    >
      <Grid container>
        {tools.map((item, index) => {
          return (
            <Grid item>
              <div>{item}</div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
