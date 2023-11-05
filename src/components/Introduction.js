import { Box } from "@mui/material";
import useWindowDimensions from "../Utils/dimention";

export default function Introduction() {
  const { height } = useWindowDimensions();
  return (
    <Box sx={{ height: height, bgcolor: "#299FB5" }} id="Introduction">
      <div className="h-full flex-col flex flex-1 items-center justify-center lg:p-10 md:p-5 sm:p-2">
        <div className="text-white font-bold text-3xl">What is MEE?</div>
        <div className="text-lg font-semibold text-[#97dbe7] text-center font-sans">
          Showing personalized advertisement in the social media application by
          tracking the calls, messages, comments, posts and search of a
          particular user. Along with that showing product according to indexing
          order using sentimental analysis and predicting next word for the
          texts in ‘Tamil’.
        </div>
      </div>
    </Box>
  );
}
