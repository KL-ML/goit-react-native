import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import locationIcon from '../../assets/icons/posts/location.png';
import commentsIcon from '../../assets/icons/posts/message.png';
import commentsFullIcon from '../../assets/icons/posts/messageFull.png';
import likesIcon from '../../assets/icons/posts/thumbsUp.png';
import likesFullIcon from '../../assets/icons/posts/thumbsUpFull.png';

export default function Post({ post }) {
  const navigation = useNavigation();

  const { postTitle, likes, imgUri, locationName, location, comments } =
    post;
  return (
    <View
      style={styles.post}
      //   onPress={() => {
      //     alert('crete new POST');
      //   }}
      //   activeOpacity={0.8}
    >
      <View style={styles.imageHolder}>
        <Image source={{ imgUri }} style={styles.image}></Image>
      </View>
      <Text style={styles.title}>{postTitle}</Text>
      <View style={styles.additionContainer}>
        <View style={styles.reactionHolder}>
          <TouchableOpacity
            style={styles.commentsHolder}
          >
            <Image
              style={styles.commentsIcon}
              source={comments.length === 0 ? commentsIcon : commentsFullIcon}
            ></Image>
            <Text style={comments.length === 0 && styles.commentsCount}>
              {comments.length}
            </Text>
          </TouchableOpacity>
          <View style={styles.likesHolder}>
            <Image
              style={styles.likesIcon}
              source={likes === 0 ? likesIcon : likesFullIcon}
            ></Image>
            <Text style={likes === 0 && styles.likesCount}>{likes}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.locationHolder}
          onPress={() => {
            navigation.navigate('MapScreen', location);
          }}
        >
          <Image style={styles.locationIcon} source={locationIcon}></Image>
          <Text style={styles.locationText}>{locationName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 16,
    width: '100%',
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
  },
  additionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageHolder: {
    height: 240,
    width: '100%',

    backgroundColor: '#c9c8c9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginVertical: 8,
    fontFamily: 'robotoMedium',
  },
  reactionHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  commentsIcon: {
    marginRight: 6,
  },
  commentsCount: {
    color: '#BDBDBD',
  },
  likesHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesIcon: {
    marginRight: 6,
  },
  likesCount: {
    color: '#BDBDBD',
  },
  locationHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 4,
  },
  locationText: {
    textDecorationLine: 'underline',
  },
});