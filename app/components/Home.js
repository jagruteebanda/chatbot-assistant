import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import SplashScreen from './SplashScreen';
// import ChatScreen from './ChatScreen';
import Chat from './Chat';

const { width, height } = Dimensions.get('window');

class Home extends React.Component {
    state = {
        showSplash: true
    }

    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.setState({ showSplash: false });
        }, 4000);
    }


    render() {
        return (
            <View style={{ flex: 1, width, height }}>
                {
                    this.state.showSplash ?
                        <SplashScreen />
                        :
                        <Chat/>
                }
            </View>
        )
    }
}

export default Home;