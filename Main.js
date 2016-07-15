'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
 
import TabNavigator from 'react-native-tab-navigator'; 
import MovieInfoPage from './study/MovieInfoPage'; 
import Home from './view/Home'; 

class Main extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	selectedTab:'home'
	  };
	}

  render() {
  	// console.log(TabNavigator.Item.propTypes);
		return (
			<TabNavigator>
			  <TabNavigator.Item
			  	title="首页"
			    selected={this.state.selectedTab === 'home'}
			    selectedTitleStyle={{color:'rgb(234,128,16)'}}
			    titleStyle={{color:'rgb(169,183,183)'}}
			    renderIcon={() => <Image source={require("./img/home.png")} />}
			    renderSelectedIcon={() => <Image source={require("./img/home_sel.png")} />}
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			    <Home {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="订单"
			    selected={this.state.selectedTab === 'list'}
			    selectedTitleStyle={{color:'rgb(234,128,16)'}}
			    titleStyle={{color:'rgb(169,183,183)'}}
			    renderIcon={() => <Image source={require("./img/list.png")} />}
			    renderSelectedIcon={() => <Image source={require("./img/list_sel.png")} />}
			    onPress={() => this.setState({ selectedTab: 'list' })}>
			    <Home />
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="搜索"
			    selected={this.state.selectedTab === 'search'}
			    selectedTitleStyle={{color:'rgb(234,128,16)'}}
			    titleStyle={{color:'rgb(169,183,183)'}}
			    renderIcon={() => <Image source={require("./img/search.png")} />}
			    renderSelectedIcon={() => <Image source={require("./img/search_sel.png")} />}
			    onPress={() => this.setState({ selectedTab: 'search' })}>
			    <MovieInfoPage />
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="发现"
			    selected={this.state.selectedTab === 'faxian'}
			    selectedTitleStyle={{color:'rgb(234,128,16)'}}
			    titleStyle={{color:'rgb(169,183,183)'}}
			    renderIcon={() => <Image source={require("./img/faxian.png")} />}
			    renderSelectedIcon={() => <Image source={require("./img/faxian_sel.png")} />}
			    onPress={() => this.setState({ selectedTab: 'faxian' })}>
			    <MovieInfoPage />
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="我"
			    selected={this.state.selectedTab === 'profile'}
			    selectedTitleStyle={{color:'rgb(234,128,16)'}}
			    titleStyle={{color:'rgb(169,183,183)'}}
			    renderIcon={() => <Image source={require("./img/profile.png")} />}
			    renderSelectedIcon={() => <Image source={require("./img/profile_sel.png")} />}
			    onPress={() => this.setState({ selectedTab: 'profile' })}>
			    <MovieInfoPage />
			  </TabNavigator.Item>
			</TabNavigator>
		);
	}
}

			    // renderBadge={() => <CustomBadgeView />}

const styles = StyleSheet.create({

});


export default Main;