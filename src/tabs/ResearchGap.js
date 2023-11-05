import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function ResearchGap() {
  return (
    <div className="w-full bg-[#27374D] border-[#3dbedb] p-5 rounded-md shadow-md">
      <div className="font-semibold text-[14px] text-justify text-[#9DB2BF]">
        <div className="flex flex-row items-center space-x-3">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            Advertisement personalization systems exist for various languages,
            there is a significant gap in the availability of such systems that
            cater to the unique linguistic characteristics and user preferences
            of Tamil-speaking individuals.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            Existing advertisement personalization systems often focus on major
            languages, neglecting the nuances and preferences of Tamil-speaking
            users. While some general-purpose systems may provide basic
            functionality, they do not address the specific challenges
            associated with the Tamil language and its user base on social media
            platforms.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            Limited availability of Tamil-specific natural language processing
            tools and resources. Existing systems may not adequately capture the
            linguistic intricacies of Tamil, resulting in suboptimal keyword
            extraction, sentiment analysis, and next word prediction.
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-4">
          <DragIndicatorIcon sx={{ color: "blue" }} />
          <div>
            The ability to track and extract Tamil words from images is largely
            unexplored in existing systems, leaving a gap in effective visual
            content analysis and advertisement personalization for
            Tamil-speaking users.
          </div>
        </div>
      </div>
    </div>
  );
}
