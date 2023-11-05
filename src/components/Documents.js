import React from "react";
import useWindowDimensions from "../Utils/dimention";
import { Box, Button, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from "../store/DocumentData";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Documents() {
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{ minHeight: height, bgcolor: "#232D3F" }}
      id="Documents"
      p={{ xs: 0.5, md: 1, lg: 2 }}
    >
       <div className="text-[#299FB5] font-semibold text-2xl text-center font-[roboto] pt-14 ">
        Documents
      </div>
      <hr className=" border-[#299FB5] mt-2 mb-8"/>
      <div className="md:m-10 m-3">
        {data.map((item, index) => {
          return (
            <Accordion sx={{ bgcolor: "transparent" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                sx={{ bgcolor: "#526D82" }}
              >
                <Typography sx={{ color: "#fff" }}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ mt: 2 }}>
                <Grid
                  container
                  columnGap={3}
                  rowGap={3}
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={{ xs: "column", md: "row" }}
                >
                  {item?.docs?.map((doc, index) => {
                    return (
                      <Grid xs={6} sm={3} md={2}>
                        <div className="bg-[#27374D] p-2 rounded-md">
                          <div className="text-center text-white font-semibold text-[13px]">
                            {doc?.title}
                          </div>
                          <div className="my-3 items-center flex justify-center">
                            <PictureAsPdfIcon
                              sx={{ fontSize: 60, color: "#fff" }}
                            />
                          </div>
                          <div>
                            <Button
                              fullWidth
                              variant="outlined"
                              startIcon={<FileDownloadIcon />}
                              sx={{ textTransform: "none" }}
                              href={doc?.path}
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Box>
  );
}
