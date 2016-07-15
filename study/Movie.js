'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Navigator,
  ActivityIndicator
} from 'react-native';

import MovieList from './MovieList';
import TabNavigator from 'react-native-tab-navigator';


class Movie extends Component {
	render() {
		return (
			<Navigator
			  initialRoute={{name: 'list',component:MovieList, index: 0}}
			  renderScene={(route, navigator) => {
			    return <route.component {...route.params} navigator={navigator} />
			  }}
			/>
		);
	}
}

const styles = StyleSheet.create({
	movieList: {
		padding: 20,
	}
});


export default Movie;