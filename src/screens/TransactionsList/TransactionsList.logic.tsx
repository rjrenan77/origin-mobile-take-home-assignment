import {useContext, useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  Image,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {styles} from './TransactionList.styles';

const TransactionsListLogic = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [vendorFilter, setVendorFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const {navigate} = useNavigation();

  useEffect(() => {
    fetchTransactions();
  }, [currentPage, pageSize]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        `https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions?page=${currentPage}&pageSize=${pageSize}`,
      );
      const data = await response.json();
      setTransactions(data.Transactions);
      setFilteredTransactions(data.Transactions);
      setTotalPages(Math.ceil(data.TotalPages / pageSize));
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleSort = () => {
    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.Date.localeCompare(b.Date);
      } else {
        return b.Date.localeCompare(a.Date);
      }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setFilteredTransactions(sortedTransactions);
  };

  const handleFilter = text => {
    const filtered = transactions.filter(transaction =>
      transaction.Vendor.toLowerCase().includes(text.toLowerCase()),
    );
    setVendorFilter(text);
    setFilteredTransactions(filtered);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onRefresh = () => {
    console.log('refreshed!');
    setRefreshing(true);
    fetchTransactions().then(() => {
      setRefreshing(false);
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigate('transactionsDetails', {transaction: item})}>
      <View style={styles.transactionItem}>
        <Text style={styles.item}>
          Date: {new Date(item.Date).toLocaleDateString()}
        </Text>
        <Text style={styles.item}>Type: {item.Type}</Text>
        <Text style={styles.item}>Amount: ${item.Amount}</Text>
        <Text style={styles.item}>Category: {item.Category}</Text>
        <Text style={styles.item}>Vendor: {item.Vendor}</Text>
        {item.ReceiptImage && (
          <Image
            source={{uri: item.ReceiptImage}}
            style={styles.receiptImage}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  function handleNavigation(screen: any) {
    navigate(screen);
  }

  function handleSignOut() {
    auth().signOut();
  }

  return {
    handleNavigation,
    handleSignOut,
    transactions,
    setTransactions,
    filteredTransactions,
    setFilteredTransactions,
    sortOrder,
    setSortOrder,
    vendorFilter,
    setVendorFilter,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    setTotalPages,
    renderItem,
    prevPage,
    nextPage,
    handleFilter,
    handleSort,
    refreshing,
    onRefresh,
  };
};

export default TransactionsListLogic;
