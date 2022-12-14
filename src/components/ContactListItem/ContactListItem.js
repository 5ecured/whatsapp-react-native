import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { useNavigation } from '@react-navigation/native'


const ContactListItem = ({ user }) => {
    const navigation = useNavigation()


    return (
        <Pressable style={styles.container} onPress={() => { }}>
            <Image
                source={{ uri: user.image }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
                <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
            </View>
        </Pressable>
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
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold'
    },
    content: {

    },
    subTitle: {
        color: 'gray'
    }
})

export default ContactListItem