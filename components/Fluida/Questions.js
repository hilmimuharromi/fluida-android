import React from 'react'
import { View, Text, FlatList, Box, SectionList, VStack, Center, Button } from 'native-base'
import { ViewerHtml } from "../Base"
const Questions = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Box borderBottomWidth="1" borderColor="coolGray.200" pl="4" pr="5" py="2">
                <ViewerHtml data={item.question} />
                <VStack space={4} alignItems="center">
                    {
                        item.options.map((o) => <Button key={o._id} w="64" h="10" bg="indigo.200" rounded="md" shadow={3}>
                            <Text>{o.option}</Text>
                            </Button>
                            )
                    }
                </VStack>
            </Box>}
        />
    )
}

export default Questions
