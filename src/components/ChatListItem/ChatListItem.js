import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg' }}
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name}>Lukas</Text>
                    <Text style={styles.subTitle}>7:30</Text>
                </View>

                <Text style={styles.subTitle}>Latest message</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    container: {
        flexDirection: 'row',
        backgroundColor:'green',
        marginHorizontal: 10,
        marginVertical: 5
    },
    content: {
        flex: 1,
        backgroundColor:'red'
    },
    row: {
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    name: {
        backgroundColor:'lightblue',
        flex: 1
    },
    subTitle: {
        backgroundColor:'pink'
    }
})

export default ChatListItem