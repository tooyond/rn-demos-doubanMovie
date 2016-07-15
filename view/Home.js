'use strict';

import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import MovieList from './MovieList';

class Home extends Component {
  render() {
    return (
      <ScrollableTabView >
        <MovieList {...this.props} tabLabel="热映电影" apiUrl="https://api.douban.com/v2/movie/in_theaters"/>
        <MovieList {...this.props} tabLabel="即将上映" apiUrl="https://api.douban.com/v2/movie/coming_soon"/>
        <MovieList {...this.props} tabLabel="Top250" apiUrl="https://api.douban.com/v2/movie/top250"/>
      </ScrollableTabView>
    );
  }
}

class HomeTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollableTabView >
      	<MovieList {...this.props} tabLabel="热映电影" apiUrl="https://api.douban.com/v2/movie/in_theaters"/>
      	<MovieList {...this.props} tabLabel="即将上映" apiUrl="https://api.douban.com/v2/movie/coming_soon"/>
      	<MovieList {...this.props} tabLabel="Top250" apiUrl="https://api.douban.com/v2/movie/top250"/>
      </ScrollableTabView>
    );
  }
}


export default Home;