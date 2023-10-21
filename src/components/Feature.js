import { Box } from "@mui/material";
import React from "react";
import useWindowDimensions from "../Utils/dimention";

export default function Feature() {
  const { height, width } = useWindowDimensions();
  return (
    <Box
      sx={{ minHeight: height }}
      p={{ sm: 0.5, md: 2, lg: 4 }}
      id="Features"
    ></Box>
  );
}
