import React, {useState} from 'react'
import {Button} from 'native-base'
import DocumentPicker from 'react-native-document-picker'
import axios from 'axios'
export default function DocPicker(props) {
    const {value, setValue} = props

    const [pdf, setPdf] = useState("")

    const uploadPdf = async() => {
        const formData = new FormData();
formData.append('pdf', pdf[0]);
        const {data, status} = await axios('http://192.168.1.10:3000/upload', {
            data: formData,
            method: 'post'
        })

        console.log('result ===>',data, status)
    }

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
