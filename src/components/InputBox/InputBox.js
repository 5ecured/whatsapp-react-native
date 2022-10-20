import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const InputBox = () => {
    return (
        <View style={styles.container}>
            <AntDesign name='plus' size={24} color='royalblue' />
            <TextInput style={styles.input} placeholder='Type a message...' />
            <MaterialIcons style={styles.send} name='send' size={24} color='white' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke'
    },
    input: {
        flex: 1
    },
    send: {

    }

})

export default InputBox