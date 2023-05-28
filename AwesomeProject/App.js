
import RegistrationScreen from './screens/auth/RegistrationScreen';
// import LoginScreen from './screens/auth/LoginScreen';

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
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}

