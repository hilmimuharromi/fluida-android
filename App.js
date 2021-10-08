import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, AboutScreen, FluidaScreen, PetunjukScreen, KiKdScreen, DaftarPustakaScreen} from './screen';
import {extendTheme, NativeBaseProvider} from 'native-base';

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

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Petunjuk" component={PetunjukScreen} />
          <Stack.Screen name="DaftarPustaka" component={DaftarPustakaScreen} />
          <Stack.Screen name="Fluida" component={FluidaScreen} />
          <Stack.Screen name="Ki-Kd" component={KiKdScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
