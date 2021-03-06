import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, FlatList, Box, Input, Button} from 'native-base';
import AntdIcon from 'react-native-vector-icons/AntDesign';

export default function ListPosts({activeMenu, contents, onClickContent}) {
  return (
    <>
      <View style={styles.layoutTitle}>
        <Text fontWeight="medium" fontSize="md">
          {activeMenu.title}
        </Text>
        {/* <Box w="90%"  padding="2" marginY="2" bg="white" shadow="2" rounded="lg">
        <Input
        
        borderWidth="0"
         w="90%"
        InputLeftElement={
            <AntdIcon name="search1"  size={30} color="#000" />
        }
        placeholder={`Cari ${activeMenu.title} ...`}
      />
      </Box> */}
      </View>
      <View style={styles.layoutList}>
        <FlatList
          data={contents ? contents : []}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
            key={index.toString()}
              style={styles.cardPost}
              onPress={() => onClickContent(item)}>
              <Box
                w="50"
                h="50"
                mr="1"
                justifyContent="center"
                alignItems="center"
                rounded="lg"
                shadow="3"
                bg="darkBlue.200">
                <AntdIcon name="caretright" size={30} color="#fff" />
              </Box>
              <Text>{item[item.flag]?.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  layoutTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  layoutList: {
    flex: 5,
  },
  cardPost: {
    flexDirection: 'row',
    margin: 5,
    paddingLeft: 30,
    alignItems: 'center',
  },
});
