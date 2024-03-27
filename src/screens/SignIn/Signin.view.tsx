import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SigninLogic from './Signin.logic';
import {styles} from './Signin.styles';
import {fonts} from '@helpers/fonts';

export function Signin() {
  const {
    handleSignIn,
    email,
    setEmail,
    password,
    setPassword,
    handleNavigation,
  } = SigninLogic();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@assets/images/logo.png')} />

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
        placeholderTextColor={'#ccc'}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSignIn(email, password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center', top: 20}}>
        <Text style={{fontFamily: fonts.PrimaryRegular, color: 'black'}}>
          Don't have an account?
        </Text>
        <Text
          style={{color: 'blue', textAlign: 'center'}}
          onPress={() => handleNavigation('signUp')}>
          Create an Origin Assessment account
        </Text>
      </View>
    </View>
  );
}
