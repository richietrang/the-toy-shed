import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';


export type ThumbnailComponentProps = {
  videoId: string;
  title: string;
  thumbnail: string;
  iconURL: string;
  shortDescription: string;
};

const ThumbnailComponent = ({videoId, title, thumbnail, iconURL, shortDescription}: ThumbnailComponentProps) => {
    return (
      <View>
          <Image style={styles.image} source={{uri: thumbnail}}/>
          <View style={styles.descriptionBox}>
            <Image style={styles.toyIcon} source={{uri: iconURL}}/>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.shortDescription}>{shortDescription}</Text>
            </View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
  },
  descriptionBox: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    borderColor: '#e5e5e5',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 8,
    paddingRight: 60,
    
  },
  shortDescription: {
    fontSize: 12,
    marginLeft: 8,
    color: globalStyles.darkGrey.color,
  },
  toyIcon: {
    height: 40,
    width: 40,
    margin: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 0,
  }
});

export default ThumbnailComponent;
