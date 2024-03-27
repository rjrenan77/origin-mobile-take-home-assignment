import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {TransactionsDetails} from '@screens/TransactionsDetails';
import {TransactionsList} from '@screens/TransactionsList';

type AppRoutes = {
  transactionsList: undefined;
  transactionsDetails: {params: {}};
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Screen name="transactionsList" component={TransactionsList} />
      <Screen name="transactionsDetails" component={TransactionsDetails} />
    </Navigator>
  );
}
