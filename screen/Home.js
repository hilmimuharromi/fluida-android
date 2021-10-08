import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Heading, StatusBar, Box} from 'native-base';
function HomeScreen() {
  return (
    <View style={styles.layout}>
      <StatusBar backgroundColor="#219EBC" hidden={true} />
      <View style={styles.header}>
        <View>
          <Heading
            mt="10"
            pl="5"
            pr="6"
            fontSize="3xl"
            letterSpacing="lg"
            textAlign="left">
            Hey, What Would
          </Heading>
          <Heading pl="5" pr="6" textAlign="left">
            you like to learn today ?
          </Heading>
          <Heading pl="5" pr="6" textAlign="left">
            today ?
          </Heading>
        </View>
        <View style={styles.user}>
          <Box bg="#fff" p="3" mt="5" w="80%" rounded="lg" shadow={2}>
            Hi, User
          </Box>
        </View>
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#219EBC',
    elevation: 4,
  },
  body: {
    flex: 2,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
