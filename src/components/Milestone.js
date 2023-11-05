import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import useWindowDimensions from "../Utils/dimention";
import { Box } from "@mui/material";
import { value } from "../store/SubmissionData";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";

export default function Milestone() {
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{ minHeight: height, bgcolor: "#526D82" }}
      p={{ sm: 0.5, md: 2, lg: 4 }}
      id="Milestone"
    >
      <div className="text-[#fff] font-semibold text-2xl text-center font-[roboto] pt-10 ">
        Milestone
      </div>
      <hr className=" border-[#fff] mt-2 mb-8"/>
      <Timeline position="alternate">
        {value.map((item, index) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ bgcolor: "#27374D" }}>
                  {item.type === "viva" ? (
                    <GroupsIcon sx={{ color: "#299FB5" }} />
                  ) : (
                    <DescriptionIcon sx={{ color: "#299FB5" }} />
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <div className="bg-[#27374D] p-2 flex flex-col rounded-md shadow-md">
                  <div className="font-bold text-[#DDE6ED] mb-2">
                    {item.title}
                  </div>
                  <div className="text-[#9DB2BF] font-semibold text-[13px] mb-2">
                    {item.desc}
                  </div>
                  <div className="text-[#2E8A99] font-normal text-[12px]">
                    {item.marks}
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}
