import React from 'react'
import { View, Heading, Spinner, HStack } from 'native-base';

const Loading = () => {
    return (
        <View>
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        </View>
    )
}

export default Loading
