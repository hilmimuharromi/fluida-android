import React from 'react';
import {View, Box, FlatList, Pressable} from 'native-base';
import {IconEducation, IconGrowth, IconAbout, IconHelp} from '../Icon'

const ListMenus = ({navigation}) => {

    const menus = [
        {
          key: 1,
          title: 'Fluida Dinamis',
          path: 'Fluida',
          icon: <IconEducation />
        },
        {
          key: 2,
          title: 'KI - KD',
          path: 'Ki-Kd',
          icon: <IconGrowth />
        },
        {
          key: 3,
          title: 'About',
          path: 'About',
          icon: <IconAbout />
        },
        {
          key: 4,
          title: 'Petunjuk',
          path: 'Petunjuk',
          icon: <IconHelp/>
        },
        {
          key: 5,
          title: 'Peta Konsep',
          path: 'PetaKonsep',
          icon: <IconAbout />
        },
        {
          key: 4,
          title: 'Daftar Pustaka',
          path: 'DaftarPustaka',
          icon: <IconHelp/>
        }
      ]

    return(
        <FlatList
        data={menus}
        style={{paddingBottom: 100}}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={{height: 200, padding: 5,marginHorizontal: 10, justifyContent: item.key %2 !== 0 ? 'flex-start' : 'flex-end'}}>
          <Pressable
      onPress={() => {
        console.log("Hello world", item.path)
        navigation.push(item.path)
      }}
    >
          <Box 
          shadow={4} bg="#fff" p="3" rounded="xl" h="158" w="118" >
              {item.icon}
            {item.title}</Box>
            </Pressable>
          </View>
        )}
        />
    )

}

export default ListMenus