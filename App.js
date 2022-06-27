import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, AboutScreen, FluidaScreen, PetunjukScreen, KiKdScreen, DaftarPustakaScreen, PetaKosepScreen,  PraktikumScreen, LoginScreen, RegisterScreen} from './screen';
import {extendTheme, NativeBaseProvider,  } from 'native-base';
import { LogBox, Text, ActivityIndicator, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store, {persistor } from './store/index';
import {PersistGate} from 'redux-persist/integration/react';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
  fluida: {
    900: '#219EBC',
  },
};
const theme = extendTheme({colors: newColorTheme});
const Stack = createNativeStackNavigator();

const Routes =  () => {
  const state = useSelector((state) => state.user)

  return (
    <NavigationContainer>
      {
        state.isLogin ? 
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Petunjuk" component={PetunjukScreen} />
          <Stack.Screen name="DaftarPustaka" component={DaftarPustakaScreen} />
          <Stack.Screen name="Fluida" component={FluidaScreen} />
          <Stack.Screen name="Ki-Kd" component={KiKdScreen} />
          <Stack.Screen name="PetaKonsep" component={PetaKosepScreen} />
          <Stack.Screen name="Praktikum" component={PraktikumScreen} />
        </Stack.Navigator> : 
        <Stack.Navigator  
        screenOptions={{headerShown: false}}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      }
      </NavigationContainer>
  )
}


const App = () => {
  useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  const LoadingMarkup = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  return (
    <Provider store={store}>
       <PersistGate loading={<LoadingMarkup />} persistor={persistor}>

    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
    </PersistGate>

    </Provider>
  );
};

export default App;
