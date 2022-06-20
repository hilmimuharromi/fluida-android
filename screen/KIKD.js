
import React from 'react'
import {View,  Image} from 'native-base'
import { useWindowDimensions } from 'react-native';

export default function KiKd() {
    const { width, height } = useWindowDimensions()
    return (
        <View>
            <Image
                source={{ uri: 'https://i.imgur.com/iAm3Dte.jpg' }}
                width={width}
                height={height}
                alt={'kikd-image'}
            />
        </View>
    )
}
