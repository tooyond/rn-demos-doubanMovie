'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	Text,
	ListView,
	Alert,
	Animated,
	TouchableOpacity,
	TouchableHighlight,
	Navigator,
	ActivityIndicator,
	GridLayout
} from 'react-native';

import MovieInfo from './MovieInfo';
import MovieInfoPage from './MovieInfoPage';

let request_url = 'https://api.douban.com/v2/movie/top250';
let movies;

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviesDataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
			loaded: false,
			left: 0,
			bounceValue: new Animated.Value(0),
		};

		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
		// 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.fetchData = this.fetchData.bind(this);
		this.change = this.change.bind(this);
		this.loadMovies = this.loadMovies.bind(this);
		this.move = this.move.bind(this);
		this._onPress = this._onPress.bind(this);
	}

	componentDidMount() {
		this.fetchData(0);


		// setTimeout(() => {
		// 	alert("setTimeout")
		// }, 5000);
	}

	_onPress(id){
		let {navigator} = this.props;
		if(navigator){
			navigator.push({
				name:'info',
				component:MovieInfoPage,
				params:{
					id:id
				}
			})
		}
	}

	fetchData(index) {
		fetch(request_url + "?start=" + index).then((response) => response.json()).then((responseData) => {
			// console.log(responseData);
			movies = responseData.subjects;
			this.setState({
				moviesDataSource: this.state.moviesDataSource.cloneWithRows(responseData.subjects),
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
		// console.warn("a警告1");
		// console.table("aaa");
		return ( 
			<View style={[styles.box,{alignItems:'center',flex:1}]}>
	  			
  			  	<Text >
  				正在读取豆瓣top250电影数据。。。
  				</Text> 
		        <ActivityIndicator
		          style={[{margin:10}, {backgroundColor:'#0000'}, {height: 80}]}
		          color="#000"
		          size="large"
		        />  
			</View> 
		)
	}


	move({
		nativeEvent
	}) {
		return;
		this.setState({
			left: nativeEvent.locationX,
		});
	}

	loadMovies() {
		this.state.bounceValue.setValue(1.1); // 设置一个较大的初始值
		Animated.spring( // 可选的基本动画类型: spring, decay, timing
			this.state.bounceValue, // 将`bounceValue`值动画化
			{
				toValue: 1, // 将其值以动画的形式改到一个较小值
				friction: 1, // Bouncier spring
			}
		).start(); // 开始执行动画
		return;
		Alert.alert('提示', '确认读取电影数据？', [{
			text: '取消'
		}, {
			text: '确认',
			onPress: () => this.fetchData(),
		}]);
	}

	renderMovies() {
		return (
			<View style={{flex:1}}> 
				<ListView
					style={{marginLeft:-10}}
		  		  dataSource={this.state.moviesDataSource}
		  		  renderRow={(rowData) => 
		  		  	<TouchableOpacity 
		  		  		onPress={this._onPress.bind(this,rowData.title)}
		  		  		activeOpacity={0.8}>
		  		  		<MovieInfo movie={rowData}/>
		  		  	</TouchableOpacity>
		  		  }
				/>
	  		</View>

		)
	}

	change() {
		movies.shift();
		movies.pop();
		this.setState({
			moviesDataSource: this.state.moviesDataSource.cloneWithRows(movies),
		})
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