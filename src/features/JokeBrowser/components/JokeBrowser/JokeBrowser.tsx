import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import Joke from '../../../../components/Joke';
import Rating from '../../../Rating/components/Rating';
import {useFetchJoke} from '../../hooks/useFetchJoke';
import styles from './style';
import {applyAppiumLabel} from '../../../../services/appiumService';

const JokeBrowser = () => {
  const [currentJoke, setCurrentJoke] = useState<IJoke>();

  const {fetchJoke, cancelJokeRequest} = useFetchJoke();

  const generateJoke = async () => {
    const joke = await fetchJoke();
    if (joke) {
      setCurrentJoke(joke);
    }
  };

  useEffect(() => {
    generateJoke();
    return () => cancelJokeRequest();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.jokeContainer}>
        <Joke text={currentJoke ? currentJoke.text : ''} animated={true} />
      </ScrollView>
      <TouchableOpacity
        onPress={generateJoke}
        style={styles.button}
        {...applyAppiumLabel('JokeBrowser-next-joke-button', true)}>
        <Text>Next Joke</Text>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        {currentJoke && (
          <Rating containerStyle={{marginBottom: 40}} joke={currentJoke} />
        )}
      </View>
    </View>
  );
};

export default JokeBrowser;
