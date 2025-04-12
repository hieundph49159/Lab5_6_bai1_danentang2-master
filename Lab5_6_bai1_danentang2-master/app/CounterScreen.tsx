import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply, selectCount, RESET_COUNTER } from './counterSlice';

const CounterScreen = () => {
  // Lấy giá trị state từ store
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // Các hàm xử lý sự kiện
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleMultiply = () => dispatch(multiply(2)); 
  const handleReset = () => dispatch(RESET_COUNTER());

  const formatNumber = (num: number): string => {
  
    return num.toString();
};
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Giá trị đếm: {formatNumber(count)}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tăng" onPress={handleIncrement} />
        <Button title="Giảm" onPress={handleDecrement} />
        <Button title="Nhân đôi" onPress={handleMultiply} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default CounterScreen;