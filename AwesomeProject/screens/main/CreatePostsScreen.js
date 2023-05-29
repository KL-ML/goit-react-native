import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
// import { Camera } from 'expo-camera';
// import * as Location from 'expo-location';
// import * as MediaLibrary from 'expo-media-library';

// import CameraIcon from '../../icons/camera';

export default function CreatePost(
    // { navigation }
) {
//   const [postTitle, setPostTitle] = useState('');
//   const [location, setLocation] = useState(null);
//   const [locationName, setLocationName] = useState('');

//   const [cameraRef, setCameraRef] = useState(null);
//   const [photo, setPhoto] = useState('');

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const coords = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       };
//       setLocation(coords);
//     })();
//   }, []);

//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   function handleCloseKeyboard() {
//     setIsShowKeyboard(true);
//     Keyboard.dismiss();
//   }

//   function handleFormSubmit() {
//     const newPost = {
//       postId: uuidv4(),
//       postTitle,
//       likes: 0,
//       imgUri: photo,
//       locationName,
//       location: {
//         latitude: location?.latitude ?? 0,
//         longitude: location?.longitude ?? 0,
//       },
//       comments: [],
//     };

//     navigation.navigate('HomeScreen', newPost);

//     setPostTitle('');
//     setLocationName('');
//     setLocation(null);
//     setPhoto('');
//   }

//   const isFieldsFull = location != '' && postTitle != '' && photo != '';

//   const takePhoto = async () => {
//     if (cameraRef) {
//       const { uri } = await cameraRef.takePictureAsync();
//       setPhoto(uri);
//       await MediaLibrary.createAssetAsync(uri);
//     }
//   };

  return (
      <TouchableWithoutFeedback
        //   onPress={() => handleCloseKeyboard()}
      >
      <View style={styles.container}>
        {/* <View style={styles.photoContainer}> */}
        {/* <Camera
          style={styles.photoContainer} */}
        {/* //   type={Camera.Constants.Type.back}
        //   ref={setCameraRef} */}
        {/* > */}
          {/* {photo && ( */}
            {/* <View style={styles.preview}>
                      <Image
                          style={styles.previewImg} */}
                        {/* //   source={{ uri: photo }} */}
                      {/* /> */}
            {/* </View> */}
          {/* )} */}

          {/* <View style={styles.iconPhotoContainer}> */}
                      {/* <TouchableOpacity */}
                        {/* //   onPress={takePhoto} */}
                          {/* style={styles.inner} */}
                      {/* > */}
              {/* <CameraIcon fill={'#BDBDBD'} /> */}
            {/* </TouchableOpacity> */}
          {/* </View> */}
        {/* </Camera> */}
        {/* </View> */}
        <Text style={styles.textPhotoContainer}>
                  {/* {!photo ? 'Завантажте фото' : 'Редагувати фото'} */}
                  Завантажте фото
        </Text>

        <TextInput
          style={styles.inputStyles}
        //   onChangeText={text => setPostTitle(text)}
        //   value={postTitle}
          placeholder={'Назва'}
        ></TextInput>
        <TextInput
          style={styles.inputStyles}
        //   onChangeText={text => setLocationName(text)}
        //   value={locationName}
          placeholder={'Місцевість'}
        ></TextInput>
        <TouchableOpacity
                  style={[
                      styles.formButton,
                    //   isFieldsFull && styles.fullFormButton
                  ]}
          activeOpacity={0.8}
        //   onPress={() => {
        //     handleFormSubmit();
        //   }}
        >
                  <Text
                //       style={
                //       [styles.btnText, isFieldsFull && styles.fullBtnText]
                //   }
                  >
            Опублікувати
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  photoContainer: {
    position: 'relative',

    width: '100%',
    backgroundColor: '#F6F6F6',
    height: 240,
    borderRadius: 15,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',

    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  previewImg: {
    width: '100%',
    height: '100%',
  },

  iconPhotoContainer: {
    position: 'relative',
    zIndex: 100,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    width: '100%',
    height: '100%',
  },
  textPhotoContainer: {
    color: '#BDBDBD',
    marginTop: 8,
    marginBottom: 32,
  },
  inputStyles: {
    fontFamily: 'robotoRegular',
    fontSize: 16,
    lineHeight: 19,

    height: 50,
    marginBottom: 16,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  formButton: {
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    paddingVertical: 16,
  },
  fullFormButton: {
    backgroundColor: '#FF6C00',
  },
  btnText: {
    color: '#BDBDBD',
    fontFamily: 'robotoRegular',
    fontSize: 16,
    lineHeight: 19,
  },
  fullBtnText: {
    color: '#ffffff',
  },
});