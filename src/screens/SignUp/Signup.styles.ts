import {colors} from '@helpers/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: colors.Primary,
    top: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    padding: 25,
  },
});
