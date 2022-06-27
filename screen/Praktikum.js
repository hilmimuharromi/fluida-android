import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {ViewerHtml} from '../components/Base';
import {Button, Text, Modal, ScrollView} from 'native-base';
import {PdfViewer} from '../components/Fluida';
import DocumentPicker, {types} from 'react-native-document-picker';

const Praktikum = ({navigation, route}) => {
  const {data} = route.params;
  const [filePdf, setFilePdf] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBtnPreview, setShowBtnPreview] = useState(false);
  const {height} = Dimensions.get('window');

  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
      });
      setFilePdf(response[0]);
      // handleUpload(response[0]);
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        size={'full'}>
        <Modal.Content minH={height}>
          <Modal.CloseButton />
          <Modal.Header>Preview Pdf</Modal.Header>
          <Modal.Body>
            <PdfViewer source={{uri: filePdf?.uri}} />
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={handleDocumentSelection}>
              <Text>Ubah File</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <View>
        <ViewerHtml data={data[data.flag].content} />
        <View style={styles.layoutBtn}>
          {filePdf && (
            <Button style={styles.btn} onPress={() => setShowModal(true)}>
              <Text>Lihat PDF</Text>
            </Button>
          )}
          <Button style={styles.btn} onPress={handleDocumentSelection}>
            <Text>Upload Tugas</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerHtml: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    height: Dimensions.get('window').height,
  },
  layoutBtn: {
    flex:  3,
    flexDirection: "row",
  },
  btn: {
    width: 200,
    backgroundColor: "red"

  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 100,
  },
});

export default Praktikum;
