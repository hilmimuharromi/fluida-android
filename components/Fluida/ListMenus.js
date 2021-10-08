import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform, FlatList, Dimensions} from 'react-native';
import {View, Text, Box, Pressable} from 'native-base';
export default function ListMenus({
    setMenu
}) {
    const {width, height} = Dimensions.get('window');
    const [activeIndex, setActiveIndex] = useState(0);
    const SPACING = 5;
    const itemSize =  width * 0.3;
    const activeItemSize = width * 0.4
    const menus = [
      {
        key: 1,
        title: 'Materi',
      },
      {
        key: 2,
        title: 'Praktikum',
      },
      {
        key: 3,
        title: 'Tugas Proyek',
      },
      {
        key: 4,
        title: 'Soal Latihan',
      },
    ];

    useEffect(() => {
        console.log(menus[activeIndex])
        setMenu(menus[activeIndex])
      
    }, [activeIndex])

    
    return (
        <FlatList
          data={menus}
          keyExtractor={(item) => item.key}
          horizontal
          bounces={false}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          renderToHardwareTextureAndroid
          contentContainerStyle={{ alignItems: 'center', paddingLeft: 10 }}
          snapToInterval={itemSize}
          snapToAlignment='start'
          onMomentumScrollEnd={e => {
            setActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / itemSize));
            console.log(activeIndex, e.nativeEvent.contentOffset.x );
          }}
          scrollEventThrottle={10}
          decelerationRate={'fast'}
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View width={width*0.5}/>}
          renderItem={({item, index}) => (
            <View
              style={{
                width: activeIndex === index ? width*0.4: width*0.3,
                marginHorizontal: SPACING,
                // backgroundColor: 'red',
                padding: SPACING * 2,
                alignItems: 'center',
              }}>
              <Pressable
                onPress={() => {
                  console.log('Hello world', item.path);
                  setActiveIndex(index)
                }}>
                <Box
                  shadow={4}
                  bg="#fff"
                  p="3"
                  rounded="xl"
                  h={ activeIndex === index ? '200' : '100'}
                  w={activeIndex === index ? activeItemSize :itemSize}>
                      {item.title}
                      {/* {item.icon} */}
                </Box>
              </Pressable>
            </View>
          )}
        />
    )
}
