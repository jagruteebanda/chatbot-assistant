import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Webview } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const CustomVideo = () => {
    return (
        <View style={{ width: 300, height: 300 }}>
            <Webview
                javaScriptEnabled={true}
                scrollEnabled={true}
                onError={() => <View style={{ width, height: 320 }}><Text>some thing went wrong</Text></View>}
                renderError={() => <View style={{ width, height: 320 }}><Text>some thing went wrong</Text></View>}
                mediaPlaybackRequiresUserAction={false}
                source={{
                    html: `<html>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <iframe width="${width - 20}" height="${300}"
                        src="https://www.youtube.com/watch?v=MyNSOu-Fl-k">
                    </iframe>
                </html>`
                }}
            />
        </View>
    )
};

class ChatScreen extends Component {
    state = {
        messages: [],
    }

    UNSAFE_componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'My message',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-blue-filled-color/300/14134081Untitled-3-512.png',
                    },
                    image: 'https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-blue-filled-color/300/14134081Untitled-3-512.png',
                }
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <View style={{ flex: 1, width, height }}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        );
    }
}

export default ChatScreen;