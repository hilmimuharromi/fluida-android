import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Alert,IconButton, HStack, VStack, CloseIcon, Text, Center}  from "native-base"

const AlertComp = ({status, title}) => {
  return (
    <Center mb={"3"} px="3">
       <Alert w="100%" status={status}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {title}
                  </Text>
                </HStack>
                <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} />
              </HStack>
            </VStack>
          </Alert>
    </Center>
  );
};

export default AlertComp;

const styles = StyleSheet.create({});
