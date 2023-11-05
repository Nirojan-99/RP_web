import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';

export default function MediaCard(props) {
  return (
    <div className="bg-white shadow-md flex items-center flex-col p-3 rounded-md hover:scale-105 transition-all">
      <img src={props.data.img} className="h-[240px] w-[240px] rounded-full" />
      <div className="flex flex-col items-center w-full mt-3">
        <div className="font-semibold text-xl ">{props.data.name}</div>
        <div className="font-sans text-[14px] font-semibold text-[#333]">
          {props.data.position}
        </div>
      </div>
      <div className="flex w-full flex-row items-end mt-4">
        <IconButton href={props.data.linkedin}>
          <LinkedInIcon sx={{color:"blue"}}/>
        </IconButton>
        <IconButton href={"mailto:"+props.data.mail}>
          <EmailIcon sx={{color:"#ea4335"}}/>
        </IconButton>
        <IconButton href="https://www.google.com">
          <LanguageIcon />
        </IconButton>
      </div>
    </div>
  );
}
