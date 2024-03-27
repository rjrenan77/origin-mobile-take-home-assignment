import {colors, fonts} from '@helpers/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    borderColor: colors.Primary,
    color: colors.Primary,
    fontFamily: fonts.PrimaryRegular,
  },
  disabled: {
    color: '#999',
    borderColor: '#999',
  },
});
