import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import Joke from '../../../../components/Joke/Joke';
import Rating from '../../../Rating/components/Rating/Rating';
import {useFetchJoke} from '../../hooks/useFetchJoke';
import styles from './style';

const JokeBrowser = () => {
  const [currentJoke, setCurrentJoke] = useState<IJoke>();

  const {fetchJoke} = useFetchJoke();
  useEffect(() => {
    fetchJoke().then((joke: IJoke) => {
      setCurrentJoke(joke);
    });
  }, []);

  const generateJoke = async () => {
    const joke = await fetchJoke();
    setCurrentJoke(joke);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.jokeContainer}>
        <Joke text={currentJoke ? currentJoke.text : ''} animated={true} />
      </ScrollView>
      <TouchableOpacity onPress={generateJoke} style={styles.button}>
        <Text>Next Joke</Text>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        {currentJoke ? (
          <Rating style={{marginBottom: 40}} joke={currentJoke} />
        ) : null}
      </View>
    </View>
  );
};

export default JokeBrowser;
