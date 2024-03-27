import {useContext, useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import TransactionsListLogic from './TransactionsList.logic';
import {styles} from './TransactionList.styles';

import {UserContext} from '@context/UserContextProvider';
import {Pagination} from '@components/Pagination';

export function TransactionsList() {
  const {
    handleSignOut,
    filteredTransactions,
    sortOrder,
    vendorFilter,
    currentPage,
    totalPages,
    renderItem,
    prevPage,
    nextPage,
    handleFilter,
    handleSort,
    refreshing,
    onRefresh,
  } = TransactionsListLogic();

  const {userInfo} = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hi, {userInfo?.displayName} 👋</Text>
        <TouchableOpacity onPress={() => handleSignOut()}>
          <Image
            style={styles.image}
            source={require('@assets/images/logout.jpg')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>Your transactions 💲 </Text>

      <View style={{marginEnd: 10, marginTop: 20}}>
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.input}
            placeholder="Filter by Vendor"
            value={vendorFilter}
            onChangeText={handleFilter}
            placeholderTextColor={'#ccc'}
          />
          <TouchableOpacity onPress={handleSort}>
            <Text style={styles.sortButton}>
              Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </Text>
          </TouchableOpacity>
        </View>

        {filteredTransactions.length > 0 ? (
          <>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNextPage={nextPage}
              onPrevPage={prevPage}
            />
            <FlatList
              scrollEnabled
              showsVerticalScrollIndicator={false}
              data={filteredTransactions}
              renderItem={renderItem}
              keyExtractor={item => item.Id.toString()}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              ListFooterComponent={<View style={{height: 350}} />}
            />
          </>
        ) : (
          <ActivityIndicator
            style={{top: 130}}
            size={'large'}
            color={'green'}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
