import { Image, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

interface Contact {
    uid: number;
    name: string;
    status: string;
    imageUrl: string;
}

export default function ContactList() {
    const contacts: Contact[] = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extraordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];

    const renderContact = ({ uid, name, status, imageUrl }: Contact) => (
        <View key={uid} style={styles.userCard}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.userImage}
                // defaultSource={require('./assets/default-avatar.png')} // Make sure the path is correct
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingText}>Contacts</Text>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {contacts.map(renderContact)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
        padding: 16,
        color: '#fff',
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: '#8D3DAF',
        padding: 12,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: 4,
    },
    userStatus: {
        fontSize: 14,
        color: '#F0F0F0',
        opacity: 0.9,
    },
});
