import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function ResearchProblem() {
  return (
    <div className="w-full bg-[#27374D] border-[#3dbedb] p-5 rounded-md shadow-md">
      <div className="font-semibold text-[14px] text-justify text-[#9DB2BF]">
        <div className="flex flex-row items-center space-x-3">
          <DragIndicatorIcon sx={{color:"blue"}} />
          <div>
            Since Tamil has a complex nature itself there are not many systems
            existing already. Especially in the E-commerce domain.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{color:"blue"}} />
          <div>
            Even the existing advertising personalization systems primarily
            cater to English-speaking users, neglecting the nuances of the Tamil
            language and culture.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{color:"blue"}} />
          <div>
            Existing systems needs improvements in the name of accuracy and
            efficiency.
          </div>
        </div>
      </div>
    </div>
  );
}
