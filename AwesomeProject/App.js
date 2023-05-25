import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './assets/screens/RegistrationScreen';
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
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
});
