import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Heading, StatusBar, Modal, HStack, VStack, Button} from 'native-base';
import { ListMenus, HeaderHome } from '../components/Home';
function HomeScreen(props) {
  const [showModal, setShowModal] = useState(false)

 
  return (
    <View style={styles.layout}>
       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" height="400">
          <Modal.CloseButton />
          <Modal.Header>User</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Name</Text>
                <Text color="blueGray.400">Nama User</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Email</Text>
                <Text color="blueGray.400">user@mail.com</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Join Date</Text>
                <Text color="green.500">18-07-2021</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
            colorScheme="red"
              flex="1"
              onPress={() => {
                setShowModal(false)
              }}
            >
              Logout
            </Button>
          </Modal.Footer>

        </Modal.Content>
        </Modal>

      <StatusBar backgroundColor="#219EBC" hidden={true} />
      <View style={styles.header}>
        <HeaderHome setShowModal={setShowModal}  />
        
      </View>
      <View style={styles.body}>
        <ListMenus {...props} />
        
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
