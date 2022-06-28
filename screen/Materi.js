import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {ViewerHtml, BackTitle} from '../components/Base';
import {Button, Text, Modal, ScrollView} from 'native-base';
import {useSelector} from 'react-redux';

const Materi = ({navigation, route}) => {
  const data = useSelector(state => state.playlist.currentPlaylist.materi);

  return (
    <View style={styles.layout}>
      <BackTitle
        title={`materi-${data.title}`}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.htmlViewer}>
        <ViewerHtml data={data.content} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  htmlViewer: {
    padding: 5
  }
});

export default Materi;
