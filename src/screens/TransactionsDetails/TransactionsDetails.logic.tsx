import {useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const TransactionsDetailsLogic = () => {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loadingReceipt, setLoadingReceipt] = useState(false);
  const [receiptUrl, setReceiptUrl] = useState('');

  const mapRef = useRef(null);

  const onRegionChange = () => {
    Geolocation.getCurrentPosition(
      async pos => {
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

  const attachCoordinates = async (transactionId: string) => {
    Geolocation.getCurrentPosition(
      async pos => {
        try {
          setLoading(true);

          const response = await fetch(
            `https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions/${transactionId}/coordinates`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                Lat: pos.coords.latitude,
                Lon: pos.coords.longitude,
              }),
            },
          );

          if (response.ok) {
            Alert.alert(
              'Coordinates Lat: ' +
                pos.coords.latitude +
                ' and Lon: ' +
                pos.coords.longitude +
                ' Attached',
              'GPS coordinates attached successfully.',
            );
          } else {
            Alert.alert('Error', 'Failed to attach GPS coordinates.');
          }
        } catch (error) {
          console.error('Error attaching coordinates:', error);
          Alert.alert('Error', 'Failed to attach GPS coordinates.');
        } finally {
          setLoading(false);
        }
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  const attachReceipt = async (transactionId: string) => {
    if (receiptUrl.length === 0) {
      Alert.alert('Please input a valid URL');
      return;
    }

    try {
      setLoadingReceipt(true);
      // Replace `id` in the URL with the actual transaction ID
      const response = await fetch(
        `https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions/${transactionId}/receipt`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ReceiptImageUrl: receiptUrl,
          }),
        },
      );

      if (response.ok) {
        Alert.alert('Receipt Attached', 'Receipt URL attached successfully.');
      } else {
        Alert.alert('Error', 'Failed to attach receipt URL.');
      }
    } catch (error) {
      console.error('Error attaching receipt:', error);
      Alert.alert('Error', 'Failed to attach receipt URL.');
    } finally {
      setLoadingReceipt(false);
    }
  };

  function handleNavigation(screen: any) {
    navigate(screen);
  }

  return {
    handleNavigation,
    navigate,
    attachCoordinates,
    loading,
    receiptUrl,
    loadingReceipt,
    setLoadingReceipt,
    setReceiptUrl,
    attachReceipt,
    onRegionChange,
  };
};

export default TransactionsDetailsLogic;
