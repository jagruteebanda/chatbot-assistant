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

import Home from './app/components/Home';

const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;

const RouteConfigs = {
	Home: {
		screen: Home
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