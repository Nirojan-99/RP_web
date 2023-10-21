import React from "react";
import home from "../assets/home.jpg";
import { Box, Grid } from "@mui/material";
import useWindowDimensions from "../Utils/dimention";

export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <Box sx={{ height: height }} id="Home">
      <div className="w-full h-full" id="home">
        <div className=" h-full flex-col flex justify-center lg:p-10 md:p-5 p-2">
          <Grid container>
            <Grid item md={6} xs={12}>
              <div className="font-bold lg:text-3xl text-xl md:text-2xl text-center  text-[#fff] font-sans sm:text-center md:text-left">
                Advertisement Personalization For Tamil Language Using Natural
                Language Processing.
              </div>
              <div className="lg:text-2xl sm:text-lg md:text-xl text-slate-300 font-semibold text-center sm:text-center md:text-left">
                |23-014|
              </div>
            </Grid>
            <Grid
              item
              md={6}
              sx={{ display: { md: "block", xs: "none" } }}
              xs={0}
            ></Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
}
