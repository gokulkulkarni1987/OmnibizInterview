import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../store/counterReducer';

const CounterComponent = ({params}) => {
  const dispatch = useDispatch();
  const {count} = useSelector(({counter}) => counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Increment" onPress={handleIncrement} />
      <Text>{count}</Text>
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

export default CounterComponent;
