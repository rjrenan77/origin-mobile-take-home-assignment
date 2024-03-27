import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SignupLogic from './Signup.logic';
import {styles} from './Signup.styles';
import {fonts} from '@helpers/fonts';
import {useEffect, useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';

export function Signup({route}) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    setRepeatPassword,
    repeatPassword,
    handleSignUp,
    handleNavigation,
    preview,
    setPreview,
  } = SignupLogic();

  useEffect(() => {
    if (route?.params?.uri !== undefined) {
      setPreview && setPreview(route?.params?.uri);
    }
  }, [route?.params]);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('@assets/images/logo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={'#ccc'}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholderTextColor={'#ccc'}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholderTextColor={'#ccc'}
        />

        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Repeat Password"
          value={repeatPassword}
          autoCapitalize="none"
          onChangeText={setRepeatPassword}
          placeholderTextColor={'#ccc'}
        />
        {preview && (
          <Image
            source={{
              uri: preview,
            }}
            style={{alignSelf: 'center', width: 250, height: 250}}
          />
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('camera')}>
          <Text style={styles.buttonText}>Take a picture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {marginTop: 20}]}
          onPress={() => handleSignUp()}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', top: 20}}>
          <Text style={{fontFamily: fonts.PrimaryRegular, color: 'black'}}>
            Already have an account?
          </Text>
          <Text
            style={{color: 'blue', textAlign: 'center'}}
            onPress={() => handleNavigation('signIn')}>
            Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
