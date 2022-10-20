import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message/Message'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox/InputBox'
import { useRoute, useNavigation } from '@react-navigation/native'

const ChatScreen = () => {
    const route = useRoute()
    /**
     *  useRoute is used to get the params we passed in from using navigation.navigate() from ChatListItem
     *  now, in route.params, we have { id: chat.id, name: chat.user.name }
     * */

    const navigation = useNavigation()


    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.bg}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={styles.list}
                    inverted
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    }
})

export default ChatScreen