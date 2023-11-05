import React from "react";
import useWindowDimensions from "../Utils/dimention";
import { Box, Grid } from "@mui/material";

const tools = [
  "Python",
  "flask",
  "Pandas",
  "Scikits",
  "ReactJS",
  "MUI",
  "TailwindCSS",
  "NLTK",
  "OpenCV",
  "Spacy",
];

export default function Tools() {
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{ minHeight: height,bgcolor: "#526D82" }}
      id="Tools%20&%20Technology"
      p={{ xs: 0.5, md: 1, lg: 2 }}
    >
      <div className="text-[#fff] font-semibold text-2xl text-center font-[roboto] mt-14  py-2 ">
        Tools & Technology Used
      </div>
      <hr className=" border-[#fff] mt-2 mb-8" />

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100%", p: { xs: 0.5, md: 1, lg: 2 } }}
        spacing={3}
        direction={{ xs: "column", md: "row" }}
      >
        {tools.map((item, index) => {
          return (
            <Grid item >
              <div className="bg-[#27374D] px-3 py-2 rounded-sm shadow-md text-xl text-white font-sans font-semibold">{item}</div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
