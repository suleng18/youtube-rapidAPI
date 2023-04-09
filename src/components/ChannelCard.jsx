import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail, style }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        ...style,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              border: '2px solid #e3e3e3',
              mb: 2,
              mx: 'auto',
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
