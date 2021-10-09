import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, FlatList, Box, Input} from 'native-base'
import AntdIcon from 'react-native-vector-icons/AntDesign';

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
            <Box w="90%"  padding="2" marginY="2" bg="white" shadow="2" rounded="lg">
        <Input
        
        borderWidth="0"
         w="90%"
        InputLeftElement={
            <AntdIcon name="search1"  size={30} color="#000" />
        }
        placeholder={`Cari ${activeMenu.title} ...`}
      />
      </Box>
        </View>
        <View style={styles.layoutList}>
            <FlatList 
            data={data} 
            numColumns={1}
            renderItem={({item}) => (
                <View style={styles.cardPost}>
                    <Box w="50" h="50" mr="1" justifyContent="center" alignItems="center" rounded="lg" shadow="3" bg="darkBlue.200">
                        <AntdIcon name="caretright"  size={30} color="#fff" />
                    </Box>
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
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 30
    },
    layoutList: {
        flex: 4,
    },
    cardPost: {
        flexDirection: 'row',
        margin: 5,
        paddingLeft: 30,
        alignItems: 'center'
    }
})