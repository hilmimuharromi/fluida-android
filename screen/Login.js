import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, VStack, Input} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {Login, getPosts} from '../store/user/userThunk';
import { Alert } from '../components/Base';
const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.user);
  const [email, setEmail]   =  useState("")
  const [password, setPassword]   =  useState("")
  const [showAlert, setShowAlert] = useState(false)


  return (
    <View style={styles.container}>
      {
        showAlert && 
        <Alert status= "error" title="Gagal Login, coba lagi"/>
      }
      <VStack space={4} alignItems="center">
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          placeholder="Name"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          type={'password'}
          placeholder="Password"
          onChangeText={setPassword}
        />

        <Button
        isLoading={state.status === "loading"}
          onPress={() => {
            console.log('login');
            dispatch(
              Login({
                email,
                password,
              }),
            );
          }}>
          <Text>Login</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Belum Punya akun? daftar disini</Text>
        </TouchableOpacity>
      </VStack>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
