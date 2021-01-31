import { useEffect, useState } from 'react';

const param = {
    baseURL: 'https://www.googleapis.com/youtube/v3/search?',
    youtubeAPIKey: 'AIzaSyD28zIWs5dEAWqT5kFWaeU-5HoU63rlcRw',
    channelID: 'UChGJGhZ9SOOHvBB0Y4DOO_w',
    part: 'snippet',
    order: 'date',
    maxResults: 10,
}

export type YoutubeVideo = {
    videoId: string,
    title: string;
    thumbnail: string;
}

export default () => {
  const [videos, setVideos] = useState<Array<YoutubeVideo>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  const youtubeVideosFromChannel = () => {
      let videos: Array<YoutubeVideo> = [];
      // String interpolation cannot be multiline
      fetch(`${param.baseURL}key=${param.youtubeAPIKey}&channelId=${param.channelID}&part=snippet,id&order=${param.order}&maxResults=${param.maxResults}`)
      .then(response=> {
          if(response.ok) {
              return response.json();
          } else {
              throw Error('response from youtube api does not have status ok');
          }
      })
      .then(data => {
          try {
              videos = data.items.map((video: any) => {
                  return {
                      videoId: video.id.videoId,
                      title: video.snippet.title,
                      thumbnail: video.snippet.thumbnails.high.url,
                  }
              });
              setVideos(videos);
          } catch (err) {
              throw Error('Unable to convert youtube api data to type YoutubeVideo');
          }
      })
      .catch(error => {
          setErrorMessage(error.message);
      })
  };

  useEffect(() => {
    youtubeVideosFromChannel();
  }, []);

  return {videos: videos, youtubeErrorMessage: errorMessage};
}
