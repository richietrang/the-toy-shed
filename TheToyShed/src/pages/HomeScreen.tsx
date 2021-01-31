import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import ThumbnailComponent from '../components/ThumbnailComponent';
import useYoutubeVideosFromChannel, { YoutubeVideo } from '../api/hooks/youtube/useYoutubeVideosFromChannel';
import useToyData, { Toy } from '../api/hooks/firestore/useToyData';

type useYoutubeVideosFromChannelData = {
  videos: Array<YoutubeVideo>,
  youtubeErrorMessage: string,
}

type useToyData = {
  toys: Array<Toy>;
  firestoreErrrorMessage: string,
}

const HomeScreen = () => {
  const { videos, youtubeErrorMessage }: useYoutubeVideosFromChannelData = useYoutubeVideosFromChannel();
  const { toys, firestoreErrrorMessage }: useToyData = useToyData();

  // Merge toy and video data based on youtube video id
  // toyVideos only adds to array on matching video ids
  // No current easy method to merge typescript interfaces or Types
  const toyVideos: any = videos.map(video => ({
    ...toys.find((toy) => (toy.youtube_video_id === video.videoId) && toy),
    ...video
  }))

  youtubeErrorMessage &&
  (<View><Text>Instantiate an error screen here.</Text></View>);

  firestoreErrrorMessage &&
  (<View><Text>Instantiate an error screen here.</Text></View>);

  <Text>{toys}</Text>
  
  return (
    <View style={styles.marginTabNavigation}>
      <FlatList
        data={toyVideos}
        keyExtractor={toyVideo => {return toyVideo.videoId}}
        renderItem={({ item }) => {
          return <ThumbnailComponent
            videoId={item.videoId}
            title={item.title}
            thumbnail={item.thumbnail}
            iconURL={item.toy_icon}
            shortDescription={item.short_description}
          />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  marginTabNavigation: {
    marginBottom: globalStyles.bottomTabHeight.height,
  }
});

export default HomeScreen;
