import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, FlatList, Dimensions, ScrollView } from 'react-native';
import { View, Heading, Text, Box, Pressable, Modal } from 'native-base';
import { ListMenus, ListPosts } from '../components/Fluida';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

export default function Fluida({ navigation }) {
  const { height } = Dimensions.get('window');
  const [activeMenu, setActiveMenu] = useState(0);
  const [menus, setMenus] = useState([])
  const [contents, setContents] = useState([])
  const { width } = useWindowDimensions();
  const [showContent, setShowContent] = useState(false)
  const [currentContent, setCurrentContent] = useState('<div>tes</div>')

  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true
    }
  };

  const ViewContent = () => (<RenderHtml
    contentWidth={width}
    source={{ html: currentContent }}
    renderersProps
  />)



  const getPlaylist = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: 'https://fluida-server.herokuapp.com/playlist'
      })
      if (data.data) {
        console.log('result', data.data)
        setMenus(data.data)
      }

    } catch (err) {
      console.log('error', err)
    }
  }

  useEffect(() => {
    getPlaylist()
  }, [])

  useEffect(() => {
    if (menus.length > 0) {
      setContents(menus[activeMenu].contents)
      console.log(menus[activeMenu].contents)
    }
  }, [activeMenu])

  return (
    <View style={styles.layout}>
      <Modal isOpen={showContent} onClose={() => setShowContent(false)} size={'full'}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Return Policy</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <ViewContent />

            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
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
        <ListMenus menus={menus} setMenu={(data) => setActiveMenu(data)} />
      </View>
      <View style={styles.bottom}>
        <ListPosts contents={contents} activeMenu={activeMenu} onClickContent={(data) => {
          console.log('current', data)
          setCurrentContent(data)
          setShowContent(true)
        }} />
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
