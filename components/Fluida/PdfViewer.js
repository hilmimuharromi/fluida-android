import React from 'react'
import {StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import {View, Heading, Box, Pressable, Modal, Button} from 'native-base';
import Pdf from 'react-native-pdf';

const PdfViewer = ({source}) => {
  return (
    <ScrollView  contentContainerStyle={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
      height: Dimensions.get('window').height
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height: 100
  }
  });

export default PdfViewer
