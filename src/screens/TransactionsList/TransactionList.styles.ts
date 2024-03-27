import {colors, fonts} from '@helpers/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  item: {
    fontFamily: fonts.PrimaryRegular,
    fontWeight: 'bold',
    color: '#000',
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  title: {
    fontFamily: fonts.PrimaryRegular,
    color: 'black',
    fontSize: 22,
  },
  subtitle: {
    marginTop: 20,
    fontFamily: fonts.PrimaryRegular,
    color: colors.Primary,
    fontSize: 22,
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontFamily: fonts.PrimaryRegular,
    color: '#000',
  },
  transactionItem: {
    top: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sortButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.Primary,
    fontFamily: fonts.PrimaryRegular,
  },
  receiptImage: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
});
