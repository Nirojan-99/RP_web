import { Box, Grid } from "@mui/material";
import React from "react";
import useWindowDimensions from "../Utils/dimention";
import PinIcon from "@mui/icons-material/Pin";
import ImageIcon from "@mui/icons-material/Image";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

export default function Feature() {
  const { height, width } = useWindowDimensions();
  return (
    <Box sx={{ minHeight: height }} id="Features" p={{ xs: 0.5, md: 1, lg: 2 }}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={{ xs: "stretch", md: "center" }}
        sx={{ height: height, p: { xs: 0.5, md: 1, lg: 2 } }}
        spacing={3}
        direction={{ xs: "column", md: "row" }}
      >
        <Grid item md={2.7}>
          <div className="bg-[#27374D] p-2 shadow-md text-center hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl font-bold mb-2 text-[#4477CE]">NER</div>
            <div>
              <PinIcon sx={{ color: "#fff", fontSize: 64 }} />
            </div>
            <div className="text-[14px] text-ellipsis font-semibold text-center text-white mt-2">
              Allow machine to extract named entities from product description
              in Tamil
            </div>
          </div>
        </Grid>
        <Grid item md={2.7}>
          <div className="bg-[#27374D] p-2 shadow-md text-center hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl font-bold mb-2 text-[#4477CE]">OCR</div>
            <div>
              <ImageIcon sx={{ color: "#fff", fontSize: 64 }} />
            </div>
            <div className="text-[14px] text-ellipsis font-semibold text-center text-white mt-2">
              Allow machine to extract Tamil words from images with high
              accurate.
            </div>
          </div>
        </Grid>
        <Grid item md={2.7}>
          <div className="bg-[#27374D] p-2 shadow-md text-center hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl font-bold mb-2 text-[#4477CE]">
              Sentiment Analysis
            </div>
            <div>
              <AccountTreeIcon sx={{ color: "#fff", fontSize: 64 }} />
            </div>
            <div className="text-[14px] text-ellipsis font-semibold text-center text-white mt-2">
              Allow machine to classify the comments of users.
            </div>
          </div>
        </Grid>
        <Grid item md={2.7}>
          <div className="bg-[#27374D] p-2 shadow-md text-center hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl font-bold mb-2 text-[#4477CE]">
              Word Prediction
            </div>
            <div>
              <KeyboardAltIcon sx={{ color: "#fff", fontSize: 64 }} />
            </div>
            <div className="text-[14px] text-ellipsis font-semibold text-center text-white mt-2">
              Allow machine to predict next word based on the previous words.
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
