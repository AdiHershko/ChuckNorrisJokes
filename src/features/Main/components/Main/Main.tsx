import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Favourites from '../../../Favourites/components/Favourites';
import JokeBrowser from '../../../JokeBrowser/components/JokeBrowser';

const Stack = createNativeStackNavigator();

const renderFavouritesNavigationButton = (navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
      <Icon name="heart" style={{fontSize: 20}} />
    </TouchableOpacity>
  );
};

const Main = () => {
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

export default Main;
