import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Heading, StatusBar, Modal, HStack, VStack, Button} from 'native-base';
import { ListMenus, HeaderHome } from '../components/Home';
import {useDispatch,  useSelector} from 'react-redux';
import {logout} from '../store/user/userReducer'
import moment from "moment";
function HomeScreen(props) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.user);

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
                <Text color="blueGray.400">{state.data.name}</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Email</Text>
                <Text color="blueGray.400">{state.data.email}</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Join Date</Text>
                <Text color="green.500">{moment(state.data.createdAt).format("DD-MM-YYYY")}</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
            colorScheme="red"
              flex="1"
              onPress={() => {
                dispatch(logout())
                setShowModal(false)
                // props.navigation.navigate("Login")
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
