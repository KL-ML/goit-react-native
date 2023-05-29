import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from 'expo-font';

import useRoute from './routing/router';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const routing = useRoute(true);
  return (
    <>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </>
  );
}

