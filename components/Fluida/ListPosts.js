import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, FlatList, Box} from 'native-base'
export default function ListPosts({
    activeMenu
}) {

    const data = [{
        title: `${activeMenu.title} 1`
    }, {
        title: `${activeMenu.title} 2`
    }, {
        title: `${activeMenu.title} 3`
    }, {
        title: `${activeMenu.title} 4`
    }, {
        title: `${activeMenu.title} 1`
    }, {
        title: `${activeMenu.title} 2`
    }, {
        title: `${activeMenu.title} 3`
    }, {
        title: `${activeMenu.title} 4`
    }]
    return (
        <>
        <View style={styles.layoutTitle}>
            <Text fontWeight="medium" fontSize="md">{activeMenu.title}</Text>
        </View>
        <View style={styles.layoutList}>
            <FlatList 
            data={data} 
            numColumns={1}
            renderItem={({item}) => (
                <View style={styles.cardPost}>
                    <Box w="50" h="50" mr="1" rounded="lg" shadow="3" bg="amber.600"></Box>
                    <Text>{item.title}</Text>
                    </View>
            )}
            />

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    layoutTitle: {
        flex: 1,
    
        justifyContent: 'center',
        paddingLeft: 30
    },
    layoutList: {
        flex: 5,
    },
    cardPost: {
        flexDirection: 'row',
        margin: 5,
        paddingLeft: 30,
        alignItems: 'center'
    }
})