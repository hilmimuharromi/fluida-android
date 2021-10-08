import React from 'react'
import {Button} from 'native-base'
import DocumentPicker from 'react-native-document-picker'

export default function DocPicker(props) {
    const {value, setValue} = props
    const onPress = async () => {
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
            })
            setValue(res)
            console.log(
              res
            )
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err
            }
          }

    }
    return (
        <Button onPress={onPress}>
            Upload Pdf
        </Button>
    )
}
