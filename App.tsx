import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import JokeBrowser from './src/features/JokeBrowser/components/JokeBrowser';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favourites from './src/features/Favourites/components/Favourites';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const renderFavouritesNavigationButton = (navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
      <Icon name="heart" style={{fontSize: 20}} />
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
