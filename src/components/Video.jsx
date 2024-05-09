import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Video = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    
  )
}

// const Video = ({ videos, direction }) => {
//   if (!videos) {
//     return 'Loading...'; // Handle loading state
//   }

//   return (
//     <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
//       {videos.map((item, idx) => (
//         <Box key={idx}>
//           {item.id.videoId ? <VideoCard videos={item} /> : null}
//           {item.id.channelId ? <ChannelCard channelDetail={item} /> : null}
//         </Box>
//       ))}
//     </Stack>
//   );
// };

export default Video;