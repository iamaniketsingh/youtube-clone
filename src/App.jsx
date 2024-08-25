import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";


import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
     
        <Box sx={{ backgroundColor: "#212121" }}>

          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/watch/:videoId" element={<VideoDetail />} />
            <Route path="/channel/:channelId" element={<ChannelDetail />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Box>
    </BrowserRouter>
  );
}
