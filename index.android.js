/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet, 
  Navigator,
} from 'react-native';

import Movie from './study/Movie';
import Main from './Main';
import Demo from './Demo'
// import SampleApp from './SampleApp';
// import Playground from './Playground';

class app extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Main',component:Main, index: 0}}
        renderScene={(route, navigator) => {
          return <route.component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => app);

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>
//         Hello,{this.props.name}!
//       </Text>
//     );
//   }
// } 


// class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems:'center'}}>
//         <Greeting name='1' />
//         <Greeting name='2' />
//         <Greeting name='3' />
//       </View>
//     );
//   }
// } 

// class AwesomeProject extends Component {
//   render() {

//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//       <Image
//         style={{width:193,height:110}}
//         source={pic} />

//     );
//   }
// }

// class Blink extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {showText:true};

//     setInterval(() => {
//       this.setState({
//         showText: !this.state.showText
//       });
//     },1000)
//   }

//   render() {
//     let display = this.state.showText? this.props.text : ' ';
//     return (
//       <Text>
//         {display}
//       </Text>
//     );
//   }
// } 

// class BlinkAPP extends Component {
//   render() {
//     return (
//       <View style={{alignItems:'center'}}>
//         <Blink style={styles2.bigblue} text='7777777777777' />
//         <Blink style={styles2.red} text='88888888888888888' />
//         <Blink style={[styles2.bigblue,styles2.red]} text='000000000000000000000000' />
//       </View>
//     );
//   }
// } 



// class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View style={{alignItems:'center'}}>
//         <Text style={styles2.bigblue}  >text</Text>
//         <Text style={styles2.red} text='88888888888888888' >text</Text>
//         <Text style={[styles2.bigblue,styles2.red]} text='000000000000000000000000' >text</Text>
//       </View>
//     );
//   }
// } 

// class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View >
//         <View style={{width:50,height:50,backgroundColor:'powderblue'}}  />
//         <View style={{width:100,height:100,backgroundColor:'skyblue'}}   />
//         <View style={{width:150,height:150,backgroundColor:'steelblue'}}  />
//       </View>
//     );
//   }
// } 

// class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <View style={{flex:1,backgroundColor:'powderblue'}}  />
//         <View style={{flex:3,backgroundColor:'skyblue'}}   />
//         <View style={{flex:3,backgroundColor:'steelblue'}}  />
//       </View>
//     );
//   }
// } 

// class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{flex:1,flexDirection:'row'}}>
//         <View style={{flex:1,backgroundColor:'powderblue'}}  />
//         <View style={{flex:3,backgroundColor:'skyblue'}}   />
//         <View style={{flex:3,backgroundColor:'steelblue'}}  />
//       </View>
//     );
//   }
// } 

// class justifyContent extends Component {
//   render() {
//     return (
//       // Try setting `justifyContent` to `center`.
//       // Try setting `justifyContent` to `space-between`.
//       // Try setting `justifyContent` to `flex-start`.
//       // Try setting `justifyContent` to `flex-end`.
//       <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
//         <View style={{height:100,width:100, backgroundColor:'powderblue'}}  />
//         <View style={{height:100,width:100, backgroundColor:'skyblue'}}   />
//         <View style={{height:100,width:100, backgroundColor:'steelblue'}}  />
//       </View>
//     );
//   }
// } 

// class alignItemsContent extends Component {
//   render() {
//     return (
//       // Try setting `alignItems` to `center`.
//       // Try setting `alignItems` to `flex-start`.
//       // Try setting `alignItems` to `flex-end`.
//       <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
//         <View style={{height:100,width:100, backgroundColor:'powderblue'}}  />
//         <View style={{height:100,width:200, backgroundColor:'skyblue'}}   />
//         <View style={{height:100,width:300, backgroundColor:'steelblue'}}  />
//       </View>
//     );
//   }
// } 

// class PizzaTranslator extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {text:''};
//   }

//   render() {
//     return (
//       <View style = {{padding:10}} >

//         <TextInput style={{height:40}}
//         placeholder = "请输入内容！"
//         onChangeText = {(text) =>  this.setState({ text })} />

//         <Text>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// } 



// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {

//   render() {
//     return (
//       <ScrollView>
//         <Text style={{fontSize:150}}>滚动我啊</Text>
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//         <Image source = {require('./img/1.png')} />
//       </ScrollView>
//     );
//   }
// } 


// class app extends Component {
//   render() {
//     return (
//       <movie />
//     );
//   }
// } 



// const styles = StyleSheet.create({
//   container: {
//     flex: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// const styles2 = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontSize:30,
//     fontWeight:'bold'
//   },
//   red : {
//     color:'red'
//   }
// });

// AppRegistry.registerComponent('AwesomeProject', () => app);