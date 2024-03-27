import {useContext, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {UserContext} from '@context/UserContextProvider';

const SignupLogic = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [preview, setPreview] = useState();

  const {setUserInfo} = useContext(UserContext);

  const {navigate} = useNavigation();

  function handleNavigation(screen: any) {
    navigate(screen);
  }

  function handleSignUp() {
    if (password !== repeatPassword) {
      Alert.alert("Passwords don't match.");

      return;
    }

    if (preview?.length === 0 || preview === undefined) {
      Alert.alert('Please take a picture before proceed.');

      return;
    }

    if (
      password.length === 0 ||
      name.length === 0 ||
      repeatPassword.length === 0 ||
      email.length === 0
    ) {
      Alert.alert('Please fill all the text inputs.');

      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredential => {
        console.log('user credentials-->', userCredential);
        setUserInfo && setUserInfo({displayName: name});
        const user = auth().currentUser;
        return await user?.updateProfile({
          displayName: name,
        });
        // return userCredential;
      })
      .catch(error => {
        console.log(error);

        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email already exists.');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Invalid email.');
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert(' The given password is invalid.');
        } else Alert.alert('There was an error in your submit.');
      });
  }

  return {
    name,
    setName,
    handleNavigation,
    email,
    setEmail,
    password,
    repeatPassword,
    setRepeatPassword,
    setPassword,
    handleSignUp,
    preview,
    setPreview,
  };
};

export default SignupLogic;
