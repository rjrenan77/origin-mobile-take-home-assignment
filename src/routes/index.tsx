import {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';
import RootContextProvider from '@context/RootContextProvider';
import {UserContext} from '@context/UserContextProvider';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [firebaseInitializing, setFirebaseInitializing] = useState(true);

  const {setUserInfo} = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async _user => {
      //set user context before...
      setUserInfo && (await setUserInfo(_user));
      //..navigating
      setUser(_user);

      if (firebaseInitializing) {
        setFirebaseInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  if (firebaseInitializing) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'green'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
