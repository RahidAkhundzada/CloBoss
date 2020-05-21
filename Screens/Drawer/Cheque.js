import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../src/components/CustomHeader';
const Cheque = ({navigation}) => {
  return (
    <View>
    <CustomHeader navigation={navigation} />
      <Text>Cheque</Text>
    </View>
  );
};

export default Cheque;

const styles = StyleSheet.create({});
