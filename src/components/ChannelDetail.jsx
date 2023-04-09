import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  console.log('🚀 - channelDetail:', channelDetail);
  const [videos, setVideos] = useState([]);
  console.log('🚀 - videos:', videos);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(319deg, rgba(253,45,252,1) 0%, rgba(131,32,57,1) 1%, rgba(45,171,253,1) 98%)',
            height: 300,
          }}
        />
        <ChannelCard channelDetail={channelDetail} style={{ marginTop: '-110px' }} />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
