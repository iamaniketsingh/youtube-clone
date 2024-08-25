import React from 'react'
import { Stack,Box } from '@mui/material'
import Loader from './Loader'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos,direction}) => {
  console.log(videos)
   if (!videos?.length) return (<Loader />);
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap="25px"
    flexwrap="wrap" height={"100%"}>
     
      {
        videos.map((video,idx) =>{
          return (
            <Box key={idx}>
              {video.id.videoId && <VideoCard video={video}/>}
              {video.id.channelId && <ChannelCard channelDetail={video}/>}
            </Box>
          )
        })
      }
    </Stack>
  )
}

export default Videos