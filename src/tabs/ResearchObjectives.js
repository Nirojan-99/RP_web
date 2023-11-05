import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function ResearchObjectives() {
  return (
    <div className="w-full bg-[#27374D] border-[#3dbedb] p-5 rounded-md shadow-md">
      <div className="font-semibold text-[14px] text-justify text-[#9DB2BF]">
        The primary objective of this research is to design, develop, and
        implement a robust Advertisement Personalization System that is
        specifically tailored to meet the unique linguistic, cultural, and user
        engagement needs of Tamil-speaking users on social media platforms.
        <div className="flex flex-row items-center space-x-3 mt-5">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            To Implement the extraction of relevant keywords from posts to
            enhance ad targeting.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            To track sentiment analysis for comments to understand user
            sentiment and adjust ad delivery accordingly.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            To evaluate the predictive text generation for posts and comments,
            ensuring that it aligns with the context of the words user is
            typing.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            To the tracking of images containing Tamil text and the extraction
            of content for more precise ad suggestions.
          </div>
        </div>
      </div>
    </div>
  );
}
