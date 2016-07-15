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

class MovieListRow extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <View style={styles.box}>
          <Image
            style={styles.image}
            source={{uri: movie.images.medium}} />
          <View style={{flex:1,height:100,paddingTop:5,paddingLeft:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text umberOfLines={1} style={{color:'#000',fontSize:18}}>
                {movie.title}
              </Text>
              <Text style={{color:'rgb(255,188,0)',fontSize:18}}>
                {movie.rating.average}分
              </Text>
            </View> 
            <Text style={{marginTop:10,color:'#aaa'}}>
              类型：{movie.genres.join(', ')}
            </Text>
            <Text style={{marginTop:3,color:'#aaa'}}>
              主演：{movie.casts.map((cast)=>cast.name).join('/')}
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffff',
    padding: 10,
    borderBottomWidth:0.5,
    borderBottomColor:'#eee',
  },
  boxRight: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 65,
    height: 100,
  }
});


export default MovieListRow;