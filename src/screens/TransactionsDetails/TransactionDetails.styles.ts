import {colors, fonts} from '@helpers/fonts';
import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  back: {
    width: 20,
    height: 20,
  },
  inputReceipt: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    top: 8,
    color: '#ccc',
  },
  mapContainer: {},
  map: {
    height: Dimensions.get('screen').height * 0.3,
    width: Dimensions.get('screen').width * 0.896,
    marginTop: 10,
  },
  subtitle: {
    fontFamily: fonts.PrimaryRegular,
    color: colors.Primary,
    fontSize: 22,
    bottom: 25,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.PrimaryRegular,
    marginBottom: 10,
    color: '#000',
  },
  receiptImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.Primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: fonts.PrimaryRegular,
  },
});
