import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TransactionsDetailsLogic from './TransactionsDetails.logic';
import {styles} from './TransactionDetails.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts} from '@helpers/fonts';
import MapView, {Marker} from 'react-native-maps';
import {useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export function TransactionsDetails({route, navigation}) {
  const {
    loading,
    attachCoordinates,
    attachReceipt,
    receiptUrl,
    setReceiptUrl,
    loadingReceipt,
  } = TransactionsDetailsLogic();

  const {transaction} = route.params;

  const [region, setRegion] = useState({
    latitude: transaction.Lat,
    longitude: transaction.Lon,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null);

  const onRegionChange = () => {
    Geolocation.getCurrentPosition(
      async pos => {
        setRegion({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

        mapRef?.current?.animateToRegion({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('@assets/images/back.png')}
          />
          <Text
            style={{fontFamily: fonts.PrimaryRegular, top: 2, color: '#000'}}>
            Back
          </Text>
        </TouchableOpacity>
        <View style={{padding: 10, top: 20}}>
          <Text style={styles.subtitle}>Transaction id: {transaction.Id}</Text>

          <Text style={styles.label}>
            Date: {new Date(transaction.Date).toLocaleDateString()}
          </Text>
          <Text style={styles.label}>Type: {transaction.Type}</Text>
          <Text style={styles.label}>Amount: ${transaction.Amount}</Text>
          <Text style={styles.label}>Category: {transaction.Category}</Text>
          <Text style={styles.label}>Vendor: {transaction.Vendor}</Text>
          <Text style={styles.label}>Latitude: {transaction.Lat}</Text>
          <Text style={styles.label}>Longitude: {transaction.Lon}</Text>
          {transaction.ReceiptImage && (
            <Image
              source={{uri: transaction.ReceiptImage}}
              style={styles.receiptImage}
            />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onRegionChange();

              attachCoordinates(transaction.Id);
            }}
            disabled={loading}>
            <Text style={styles.buttonText}>
              {loading ? 'Attaching...' : 'Attach your actual coordinates'}
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.inputReceipt}
            placeholder="Receipt URL"
            value={receiptUrl}
            onChangeText={setReceiptUrl}
            placeholderTextColor={'#ccc'}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => attachReceipt(transaction.Id)}
            disabled={loading}>
            <Text style={styles.buttonText}>
              {loadingReceipt ? 'Attaching...' : 'Attach Receipt'}
            </Text>
          </TouchableOpacity>
          <View style={styles.mapContainer}>
            <MapView
              ref={mapRef}
              style={styles.map}
              initialRegion={region}
              showsUserLocation
              onRegionChangeComplete={onRegionChange}>
              <Marker
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
              />
            </MapView>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
