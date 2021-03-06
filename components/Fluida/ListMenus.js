import React, {useState, useEffect} from 'react';
import {Platform, FlatList, Dimensions} from 'react-native';
import {View, Box, Pressable} from 'native-base';

export default function ListMenus({setMenu, menus}) {
  const {width, height} = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const SPACING = 5;
  const itemSize = width * 0.3;
  const activeItemSize = width * 0.4;

  useEffect(() => {
    console.log(activeIndex);
    setMenu(activeIndex);
  }, [activeIndex]);

  return (
    <FlatList
      data={menus}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      bounces={false}
      decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
      renderToHardwareTextureAndroid
      contentContainerStyle={{alignItems: 'center', paddingLeft: 10}}
      snapToInterval={itemSize}
      snapToAlignment="start"
      onMomentumScrollEnd={e => {
        setActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / itemSize));
      }}
      scrollEventThrottle={10}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={<View width={width * 0.5} />}
      renderItem={({item, index}) => (
        <View
          key={item.title}
          style={{
            width: activeIndex === index ? width * 0.4 : width * 0.3,
            marginHorizontal: SPACING,
            // backgroundColor: 'red',
            padding: SPACING * 2,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              console.log('Hello world', item.path);
              setActiveIndex(index);
            }}>
            <Box
              shadow={4}
              bg="#fff"
              p="3"
              rounded="xl"
              h={activeIndex === index ? '200' : '100'}
              w={activeIndex === index ? activeItemSize : itemSize}>
              {item.title}
              {/* {item.icon} */}
            </Box>
          </Pressable>
        </View>
      )}
    />
  );
}
