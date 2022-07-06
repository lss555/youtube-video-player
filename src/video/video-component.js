import React from 'react'
import ReactPlayer from 'react-player/lazy'

// Render a YouTube video player
// <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />

const Video = () => {

  return(
    <ReactPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
  );
}

export default Video;
