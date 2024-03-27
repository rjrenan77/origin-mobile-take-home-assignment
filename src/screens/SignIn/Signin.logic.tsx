import {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {UserContext} from '@context/UserContextProvider';
import {Alert} from 'react-native';

const SigninLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation();

  function handleNavigation(screen: any) {
    navigate(screen);
  }

  function handleSignIn(email: string, password: string) {
    if (password.length === 0 || email.length === 0) {
      Alert.alert('Please fill all the text inputs.');

      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async userCredential => {
        console.log('user credentials-->', userCredential);

        console.log('user signed in!');

        return userCredential;
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-credential') {
          Alert.alert('Invalid credentials.');
        }
      });
  }

  return {
    handleNavigation,
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
};

export default SigninLogic;
