import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './screens/auth/RegistrationScreen';
// import LoginScreen from './assets/screens/LoginScreen';

import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.containerMain}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
});
