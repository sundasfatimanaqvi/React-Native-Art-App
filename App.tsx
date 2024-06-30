import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PublishedArtProvider } from './components/screens/PublishedArtContext';
import { ArtProvider } from './components/screens/ArtContext';

import MainScreen from './components/screens/MainScreen';
import Login from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import UserScreen from './components/screens/UserScreen';
import SignupScreen from './components/screens/SignupScreen';
import VincentVanGoghScreen from './components/screens/VincentVanGoghScreen';
import ArtistProfile from './components/screens/ArtistProfile';
import EdvardMunchScreen from './components/screens/EdvardMunchScreen';
import JohannesVermeerScreen from './components/screens/JohannesVermeerScreen';
import SalvadorDaliScreen from './components/screens/SalvadorDaliScreen';
import CanvasScreen from './components/screens/CanvasScreen';
import MyProfileScreen from './components/screens/MyProfileScreen';
import MyArtworkScreen from './components/screens/MyArtworkScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ArtProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ArtistProfile" component={ArtistProfile} />
        <Stack.Screen name="VincentVanGoghScreen" component={VincentVanGoghScreen} />
        <Stack.Screen name="EdvardMunchScreen" component={EdvardMunchScreen} />
        <Stack.Screen name="JohannesVermeerScreen" component={JohannesVermeerScreen} />
        <Stack.Screen name="SalvadorDaliScreen" component={SalvadorDaliScreen} />
        <Stack.Screen name="CanvasScreen" component={CanvasScreen} />  
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} /> 
        <Stack.Screen name = "MyArtworkScreen" component={MyArtworkScreen}/>  
                                       
        
      </Stack.Navigator>
    </NavigationContainer>
    </ArtProvider>
  );
}
export default App;