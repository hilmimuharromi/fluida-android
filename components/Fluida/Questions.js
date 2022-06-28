import React from 'react';
import {
  View,
  Text,
  FlatList,
  Box,
  SectionList,
  VStack,
  Center,
  Button,
} from 'native-base';
import {ViewerHtml} from '../Base';
const Questions = ({data, answer = [], onPress}) => {
  const isAnswer = (q, o) => {
    const found = answer.find(item => q.key === item.key && item.option === o);
    if (found) {
      return 'indigo.400';
    } else {
      return 'indigo.200';
    }
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item, index}) => (
        <Box
          key={index.toString()}
          borderBottomWidth="1"
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2">
          <ViewerHtml data={item.question} />
          <VStack space={4} alignItems="center">
            {item.options.map(o => (
              <Button
                key={o.key}
                onPress={() =>onPress(item.key, o.key)}
                w="64"
                h="10"
                bg={isAnswer(item, o.key)}
                rounded="md"
                shadow={3}>
                <Text>{o.option}</Text>
              </Button>
            ))}
          </VStack>
        </Box>
      )}
    />
  );
};

export default Questions;
