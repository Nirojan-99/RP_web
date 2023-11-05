import { Box, Grid } from "@mui/material";
import React from "react";
import useWindowDimensions from "../Utils/dimention";
import { data } from "../store/TeamData";
import MediaCard from "./Card";

export default function OurTeam() {
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{ minHeight: height, bgcolor: "#232D3F" }}
      p={{ sm: 0.5, md: 2, lg: 4 }}
      id="Team"
    >
      <div className="text-[#4477CE] font-semibold text-2xl text-center font-[roboto] pt-10">
        Our Team
      </div>
      <hr className=" border-[#4477CE] mt-2 mb-3" />
      <Grid
        container
        justifyContent={"center"}
        alignItems={{ xs: "stretch", md: "center" }}
        sx={{ height: "100%", p: { xs: 0.5, md: 1, lg: 2 } }}
        spacing={3}
        direction={"row"}
      >
        {data.map((item, index) => {
          return (
            <Grid item md={2.5} xs={10}>
              <MediaCard data={item}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
