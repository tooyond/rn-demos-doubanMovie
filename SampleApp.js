'use strict';
import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ListView
} from 'react-native';


var rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
});
class SampleApp extends Component {

	constructor(props) {

		super(props);
		this.state = {
			dataSource: ds.cloneWithRows(rows),
		};

		this.renderRow = this.renderRow.bind(this);
		this.deleteRow = this.deleteRow.bind(this);

	}

	deleteRow(removeIndex) {
		delete rows[removeIndex];
		this.setState({
			dataSource: ds.cloneWithRows(rows)
		})
	};

	renderRow(rowData, sectionID, rowID) {
		return <TouchableOpacity  onPress={this.deleteRow.bind(this,rowID)}    style={{height:60, flex:1, borderBottomWidth:1}}><Text>{rowData}</Text></TouchableOpacity>
	};
	render() {
		return (<ListView        dataSource={this.state.dataSource}        renderRow={this.renderRow}/>);
	}
};
var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		fontSize: 19,
		marginBottom: 5,
	},
});
// AppRegistry.registerComponent('SampleApp', () => SampleApp);
export default SampleApp;