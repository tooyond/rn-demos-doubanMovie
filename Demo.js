'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView
} from 'react-native';

class Demo extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#f00',flex:1,flexDirection:'column'}}>
      		<View style={{backgroundColor:'#0f0',height:220,flexDirection:'row'}}>
	      		<Image style={{width:150,height:200,margin:10}} source={require('./img/1.jpg')} />
	      		<View style={{backgroundColor:'#ddf',flex:1,flexDirection:'column'}}>
      				<Text>text1</Text>
      				<Text>text1</Text>
      				<Text>text1</Text>
      				<Text>text1</Text>
	      		</View>
      		</View>
      		<Text>text2</Text>
      		<Text>text3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	text:{
		color:'#fff'
	}
});


export default Demo;