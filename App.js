import React from 'react';
import {
	View,
	Text,
	Dimensions
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import {
	createDrawerNavigator,
} from 'react-navigation-drawer';

import SplashScreen from './app/components/SplashScreen';
import Login from './app/components/Login';
// import Home from './app/components/Home';
import Chat from './app/components/Chat';

const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;

const RouteConfigs = {
	SplashScreen: {
		screen: SplashScreen
	},
	Login: {
		screen: Login
	},
	// Home: {
	// 	screen: Home
	// },
	Chat: {
		screen: Chat
	}
};

// class CustomDrawerContentComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {

// 		}
// 	}

// 	render() {
// 		return (
// 			<View style={{ flex: 1, width: 300 }}>
// 				<Text>{'Menu'}</Text>
// 			</View >
// 		);
// 	}
// }


const DrawerNavigatorConfigs = {
	drawerWidth: DRAWER_WIDTH,
	drawerPosition: "left",
	drawerType: "slide",
	edgeWidth: 30,
	drawerLockedMode: 'unlocked',
	contentOptions: {
		itemStyle: {
			height: 50
		},
		labelStyle: {
			fontSize: 16,
			fontFamily: 'Sahitya-Bold',
			fontWeight: 'normal'
		}
	},
	// contentComponent: (<CustomDrawerContentComponent />)
};

const DrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfigs);

export default createAppContainer(DrawerNavigator);