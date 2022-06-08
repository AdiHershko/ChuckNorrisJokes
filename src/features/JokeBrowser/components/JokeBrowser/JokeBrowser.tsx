import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import Joke from '../../../components/Joke/Joke';
import Rating from '../../../Rating/components/Rating/Rating';
import {useFetchJoke} from '../../hooks/useFetchJoke';

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
      <View style={styles.jokeContainer}>
        <Joke text={currentJoke ? currentJoke.text : ''} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  jokeContainer: {
    alignItems: 'center',
    marginTop: 40,
    width: 300,
    height: 200,
  },
  button: {
    alignItems: 'center',
    marginTop: 100,
    borderWidth: 2,
    borderRadius: 5,
    borderBottomWidth: 4,
    padding: 5,
  },
  ratingContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default JokeBrowser;
