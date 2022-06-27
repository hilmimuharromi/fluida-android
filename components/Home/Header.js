import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Heading, Box,  Pressable, Text} from 'native-base';
import {IconUser} from '../Icon'
import {useDispatch, useSelector} from 'react-redux';

const Header = ({
  setShowModal
}) => {
  const state = useSelector(state => state.user);
    return (
        <>
        <View>
          <Heading
            mt="10"
            pl="30"
            pr="6"
            fontSize="3xl"
            letterSpacing="lg"
            textAlign="left">
            Hey, What Would
          </Heading>
          <Heading pl="30" pr="6" textAlign="left">
            you like to learn today ?
          </Heading>
          <Heading pl="30" pr="6" textAlign="left">
            today ?
          </Heading>
        </View>
        <View style={styles.user}>
          <Box bg="#fff" p="3" mt="5" w="80%" justifyContent="space-between" flexDirection="row" rounded="lg" shadow={2}>
            {`Hi, ${state.data.name}`}
            <Pressable onPress={() => setShowModal(true)}>
            <IconUser />
            </Pressable>
          </Box>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
   
    header: {
      flex: 1,
      backgroundColor: '#219EBC',
      elevation: 4,
    },
    user: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

export default Header