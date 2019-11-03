import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class SplashScreen extends Component {

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 4 * 1000);
    }

    render() {
        return (
            <View style={{ flex: 1, width, height, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{ width: 300, height: 300, borderRadius: 150 }}
                    source={require('../images/chatbot.jpg')}
                />
                <Text style={{ fontSize: 30 }}>Philips Assistant</Text>
            </View>
        )
    }
}

export default SplashScreen;