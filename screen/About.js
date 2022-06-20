
import React from 'react'
import { View, Text, Image } from 'native-base'
import { useWindowDimensions } from 'react-native';



export default function About() {
    const { width, height } = useWindowDimensions()
    return (
        <View>
            <Image
                source={{ uri: 'https://i.imgur.com/BVozz3A.jpeg' }}
                width={width}
                height={height}
                alt={'about-image'}
            />
        </View>
    )
}
