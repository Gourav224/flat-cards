import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    const openWebsite = (webSite: string) => {
        Linking.openURL(webSite).catch((err) => console.error("Failed to open page", err))
    }
    return (
        <View>
            <Text style={styles.headingText} >Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://miro.medium.com/max/1400/1*QY5S4senfFh-mIViSi5A_Q.png',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={3}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer} >
                    <TouchableOpacity
                        onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                    >
                        <Text style={styles.socialLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://www.instagram.com/dhimangourav224/")}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        color: '#fff', // Dark color for better contrast
    },
    card: {
        width: "auto",
        height: 360,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#fff', // Lighter background for better readability
    },
    elevatedCard: {
        backgroundColor: '#f0f8ff', // Light blue background for a calming effect
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: '#888',
        shadowOpacity: 0.3,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd', // Soft border to separate header
    },
    headerText: {
        color: '#444', // Darker text for the header
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190,
        width: '100%',
    },
    bodyContainer: {
        padding: 10,
        color: '#555', 
    },
    footerContainer: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#007BFF', 
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#007BFF', 
    }
})
