import React, {useState} from 'react';
import {StyleSheet, Platform, FlatList, Dimensions} from 'react-native';
import {View, Text, Box, Pressable} from 'native-base';
import {ListMenus, ListPosts} from '../components/Fluida'
export default function Fluida() {
  const {width, height} = Dimensions.get('window');
  const [activeMenu, setActiveMenu] = useState(0);
 
  return (
    <View style={styles.layout}>
      <View style={styles.top}>
        <Text>Fluida</Text>
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
    padding: 10,
    backgroundColor: 'green',
  },
  center: {
    flex: 2,
  },
  bottom: {
    flex: 2,
  },
});
