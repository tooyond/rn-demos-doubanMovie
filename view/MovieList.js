'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View, 
	ListView,  
	TouchableOpacity,  
	ActivityIndicator,
} from 'react-native';

import MovieListRow from './MovieListRow';
import MovieInfo from './MovieInfo';
 

let movies;
let apiUrl = '';

class MovieList extends Component {


	constructor(props) {
		super(props);
		this.state = {
			moviesDataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
			loaded: false,
		};
		console.log(props.apiUrl);
		this.apiUrl = props.apiUrl;

		this.fetchData = this.fetchData.bind(this); 
		this._onPress = this._onPress.bind(this);
	}

	componentDidMount() {
		this.fetchData(0);
	}

	_onPress(id){
		let {navigator} = this.props;
		if(navigator){
			navigator.push({
				name:'info',
				component:MovieInfo,
				params:{
					id:id
				}
			})
		}
	}

	fetchData(index) {
		fetch(this.apiUrl + "?start=" + index).then((response) => response.json()).then((responseData) => {
			movies = responseData.subjects;
			this.setState({
				moviesDataSource: this.state.moviesDataSource.cloneWithRows(movies),
				loaded: true,
			});
		}).done();
	}

	render() {
		var view = View;
		if (!this.state.loaded) {
			return this.renderLoading();
		} else {
			return this.renderMovies();
		}
	}

	renderLoading() {
		return ( 
			<View style={[styles.box,{alignItems:'center',flex:1}]}>
	  			<ActivityIndicator
		          style={[{margin:10}, {backgroundColor:'#0000'}, {height: 80}]}
		          color="#000"
		          size="large"
		        />  
			</View> 
		)
	}  

	renderMovies() {
		return (
			<View style={{flex:1}}> 
				<ListView
			  		dataSource={this.state.moviesDataSource}
			  		renderRow={(rowData) => 
			  		  	<TouchableOpacity 
			  		  		onPress={this._onPress.bind(this,rowData.id)}
			  		  		activeOpacity={0.8}>
			  		  		<MovieListRow movie={rowData}/>
			  		  	</TouchableOpacity>
			  		}
				/>
	  		</View>

		)
	} 

}


const styles = StyleSheet.create({

	box: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
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


export default MovieList;