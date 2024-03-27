import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Signin} from '@screens/SignIn';
import {Signup} from '@screens/SignUp';
import {Camera} from '@screens/Camera';

type AuthRoutes = {
  signIn: undefined;
  signUp: {uri?: string};
  camera: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="signIn" screenOptions={{headerShown: false}}>
      <Screen name="signIn" component={Signin} />
      <Screen name="signUp" component={Signup} />
      <Screen name="camera" component={Camera} />
    </Navigator>
  );
}
