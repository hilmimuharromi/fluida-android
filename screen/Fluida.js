import React, {useState} from 'react';
import {StyleSheet, Platform, FlatList, Dimensions} from 'react-native';
import {View, Heading, Text, Box, Pressable} from 'native-base';
import {ListMenus, ListPosts} from '../components/Fluida';
import AntdIcon from 'react-native-vector-icons/AntDesign';

export default function Fluida({navigation}) {
  const {width, height} = Dimensions.get('window');
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <View style={styles.layout}>
      <View style={styles.top}>
        <Pressable onPress={() => navigation.goBack()}>
        <Box shadow="3" rounded="lg" p="3" marginRight="2" bg="white">
          <AntdIcon name="left" size={30} color="#000" />
        </Box>
        </Pressable>

        <Heading fontSize="3xl" letterSpacing="lg" textAlign="left">
          Fluida Dinamis
        </Heading>
      </View>
      <View style={styles.center}>
        <ListMenus setMenu={setActiveMenu} />
      </View>
      <View style={styles.bottom}>
        <ListPosts activeMenu={activeMenu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  top: {
    flex: 1,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 2,
    paddingLeft: 30,
  },
  bottom: {
    flex: 3,
  },
});
