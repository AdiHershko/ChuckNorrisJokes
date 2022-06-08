import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

import JokeBrowser from './src/features/JokeBrowser/components/JokeBrowser/JokeBrowser';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favourites from './src/features/Favourites/components/Favourites/Favourties';

const Stack = createNativeStackNavigator();

const renderFavouritesNavigationButton = (navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
      <Text>Favourites</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Chuck Norris"
          component={JokeBrowser}
          options={({navigation}) => ({
            headerRight: () => renderFavouritesNavigationButton(navigation),
          })}
        />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
