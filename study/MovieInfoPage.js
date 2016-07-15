'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  DeviceEventEmitter,
  Picker,
  ViewPagerAndroid
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';


var YToastAndroid = require('../YToastAndroid.js');

class MovieInfoPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      state:'Java'
    };
  }
  render() {
    DeviceEventEmitter.addListener('texta2r', function(e: Event) {
      alert(e.text)
  });
    return (
      <View style={{backgroundColor:'#fff',flex:1,alignItems:'center',paddingTop:100}}>
      	<Text onPress={()=>YToastAndroid.show("点击了",YToastAndroid.short).then((text)=>{alert(text+"..")})}>
      	  [{this.props.id}] rn和android交互点击测试
      	</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  viewPager: {
    flex: 1,
  },
});


export default MovieInfoPage;