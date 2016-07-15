'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import MovieInfoPage from './MovieInfoPage';

class PageViewDemo extends Component {
  render() {
    return (
      <ScrollableTabView >
      	<MovieInfoPage tabLabel="tab1"/>
      	<MovieInfoPage tabLabel="tab2"/>
      	<MovieInfoPage tabLabel="tab3"/>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({

});


export default PageViewDemo;