import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../src/components/CustomHeader';

const Reserve = ({navigation}) => {
  return (
    <View>
      <CustomHeader navigation={navigation} Other="false" />
      <Text>Reserve</Text>
    </View>
  );
};

export default Reserve;

const styles = StyleSheet.create({});
