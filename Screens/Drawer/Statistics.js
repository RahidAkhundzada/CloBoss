import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../src/components/CustomHeader';

const Statistics = ({navigation}) => {
  return (
    <View>
    <CustomHeader navigation={navigation} />
      <Text>Statistics</Text>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({});
