'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

var MOCKED_MOVIES_DATA = [{
  title: '标题',
  year: '2015',
  posters: {
    thumbnail: 'http://i.imgur.com/UePbdph.jpg'
  }
}, ];

class MovieInfo extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <View style={styles.box}>
          <Image
            style={styles.image}
            source={{uri: movie.images.small}} />
          <View style={styles.boxRight}> 
            <Text style={styles.title}>
              {movie.title}
            </Text>
            <Text style={styles.year}>
              {movie.year}
            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  boxRight: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 53,
    height: 81,
  }
});


export default MovieInfo;