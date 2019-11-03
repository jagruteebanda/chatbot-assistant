import React, { Component } from 'react';
import {
      View,
      Text,
      TextInput,
      Dimensions,
      Button
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Login extends Component {
      state = {
            userId: ''
      }

      handleUserIdChange = (value) => {
            this.setState({ userId: value });
      }

      handleLogin = () => {
            fetch('https://agile-castle-32538.herokuapp.com/apis/user/auth', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                        userId: this.state.userId
                  }),
            }).then((response) => {
                  return response.json();
            }).then((responseJson) => {
                  switch(responseJson.code) {
                        case 200: {
                              this.props.navigation.navigate('Chat', { userId: this.state.userId });
                              break;
                        }
                        default: {
                              break;
                        }
                  }
            }).catch((error) => {
                  console.log('Error:: ', error)
            });
      }

      render() {
            return (
                  <View style={{ flex: 1, width, height }}>
                        <TextInput
                              onChangeText={(e) => this.handleUserIdChange(e)}
                              // placeholder={'User Id'}
                              value={this.state.userId}
                        />
                        <Button
                              title={'Login'}
                              onPress={() => this.handleLogin()}
                        />
                  </View>
            )
      }
}

export default Login;