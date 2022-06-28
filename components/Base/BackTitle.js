import {StyleSheet} from 'react-native';
import React from 'react';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import {View, Heading, Box, Pressable} from 'native-base';

const BackTitle = ({title, onPress}) => {
  return (
    <View style={styles.top}>
      <Pressable onPress={onPress}>
        <Box shadow="3" rounded="lg" p="3" marginRight="2" bg="white">
          <AntdIcon name="left" size={20} color="#000" />
        </Box>
      </Pressable>
      <Heading fontSize="xl" letterSpacing="lg" textAlign="left">
        {title}
      </Heading>
    </View>
  );
};

export default BackTitle;

const styles = StyleSheet.create({
  top: {
    height: 100,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
