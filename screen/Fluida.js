import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import {View, Heading, Box, Pressable, Modal, Button} from 'native-base';
import {ListMenus, ListPosts, Questions} from '../components/Fluida';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {Loading, ViewerHtml} from '../components/Base';
import DocumentPicker, {types} from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import {GetPlaylist} from '../store/playlist/playlistThunk'

export default function Fluida({navigation}) {
  const {height} = Dimensions.get('window');
  const dispatch = useDispatch()
  const [activeMenu, setActiveMenu] = useState(0);
  const [menus, setMenus] = useState([]);
  const [contents, setContents] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [currentContent, setCurrentContent] = useState({});
  const [currentTitle, setCurrentTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileResponse, setFileResponse] = useState([]);

  const playlistState = useSelector((state) => state.playlist)

  useEffect(() => {
    dispatch(GetPlaylist())
  },[])

  useEffect(() =>  {
    setMenus(playlistState.data)
  },[])

  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
      });
      setFileResponse(response[0]);
      console.log('file', response[0])
      // handleUpload(response[0]);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleUpload = async file => {
    console.log('file ===>', file);
    const data = new FormData();
    data.append('praktikumId', '6182892908fcc9fb1bab141e');
    data.append('pdf', {
      uri: file.uri,
      name: file.name,
      type: file.type,
    });
    console.log('data ===>', data);

    try {
      const result = await axios({
        method: 'POST',
        url: 'http://192.168.1.5:4000/penilaian/praktikum',
        data: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODI4MjM4N2YxZjI5YjkwMTNjNzI1NyIsImVtYWlsIjoiZ3VydUBtYWlsLmNvbSIsImlhdCI6MTY1NTkxMTcyOX0.8hBLrolJA_nO32A5dmz57lKfVJgFZ_BW8JBMHDu1jlE',
        },
      });
      console.log('====== success', result);
    } catch (err) {
      console.log('====== err', err.response);
    }
  };

  const ViewContent = () => {
    switch (currentContent.flag) {
      case 'soalLatihan':
        return <Questions data={currentContent[currentContent.flag].questions} />
      case 'praktikum':
        return <View>        
        <Button onPress={handleDocumentSelection}>
          <Text>Upload Tugas</Text>
        </Button>
        </View>
      default:
        return <ViewerHtml data={currentContent[currentContent.flag].content} />
    }
  };

  const getPlaylist = async () => {
    try {
      setLoading(true);
      const {data} = await axios({
        method: 'get',
        // url: 'https://fluida-server.herokuapp.com/playlist'
        url: 'http://192.168.1.5:4000/playlist',
      });
      if (data.data) {
        setMenus(data.data);
      }
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getPlaylist();
  // }, []);

  useEffect(() => {
    if (menus.length > 0) {
      setContents(menus[activeMenu].contents);
    }
  }, [activeMenu, loading]);

  if (playlistState.status === "loading")
    return (
      <View style={styles.layoutLoading}>
        <Loading />
      </View>
    );

  return (
    <View style={styles.layout}>
      <Modal
        isOpen={showContent}
        onClose={() => setShowContent(false)}
        size={'full'}>
        <Modal.Content minH={height}>
          <Modal.CloseButton />
          <Modal.Header>{currentTitle}</Modal.Header>
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
        <ListMenus menus={menus} setMenu={data => setActiveMenu(data)} />
      </View>
      <View style={styles.bottom}>
        <ListPosts
          contents={contents}
          activeMenu={activeMenu}
          onClickContent={data => {
            // setCurrentTitle(data[data.flag].title);
            // setCurrentContent(data);
            // setShowContent(true);
            navigation.navigate("Praktikum", {data})
          }}
        />
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
  layoutLoading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
