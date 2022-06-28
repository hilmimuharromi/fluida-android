import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Questions} from '../components/Fluida';
import {BackTitle} from '../components/Base';
import {useSelector} from 'react-redux';
import {Button} from 'native-base';

const SoalLatihan = ({navigation}) => {
  const data = useSelector(state => state.playlist.currentPlaylist.soalLatihan);
  const [answer, setAnswer] = useState([]);

  const handleAnswer = (key, o) => {
    const isFound = answer.find(item => item.key === key);
    if (isFound) {
      const newAnswer = answer.map(item => {
        if (item.key === key) {
          item.option = o;
        }
        return item;
      });
      setAnswer(newAnswer);
    } else {
      setAnswer([...answer, {key: key, option: o}]);
    }
  };

  const handleSubmit = () => {
    console.log('answer', answer);
  };
  return (
    <View style={styles.layout}>
      <BackTitle title={data.title} onPress={() => navigation.goBack()} />
      <View style={styles.layoutQuestion}>
        <Questions
          data={data.questions}
          answer={answer}
          onPress={handleAnswer}
        />
      </View>
      <View style={styles.layoutBtn}>
        <Button style={styles.btn} onPress={handleSubmit}>
          <Text>Submit Jawaban</Text>
        </Button>
      </View>
    </View>
  );
};

export default SoalLatihan;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  btn: {
    width: Dimensions.get('window').width / 2 - 10,
    padding: 10,
    height: 50,
  },
  layoutBtn: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  layoutQuestion: {
    flex: 4,
  },
});
