import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Pagination.styles';
import {fonts} from '@helpers/fonts';

export function Pagination({currentPage, totalPages, onNextPage, onPrevPage}) {
  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity onPress={onPrevPage} disabled={currentPage === 1}>
        <Text
          style={[
            styles.paginationButton,
            currentPage === 1 && styles.disabled,
          ]}>
          Previous
        </Text>
      </TouchableOpacity>
      <Text style={{color: '#000', fontFamily: fonts.PrimaryRegular}}>
        {currentPage} / {totalPages}
      </Text>
      <TouchableOpacity
        onPress={onNextPage}
        disabled={currentPage === totalPages}>
        <Text
          style={[
            styles.paginationButton,
            currentPage === totalPages && styles.disabled,
          ]}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}
