import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomHeader from '../../src/components/CustomHeader';
import ShowTag from '../../src/components/ShowTag';
const Sales = ({navigation}) => {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <ShowTag />
      <View accessible={true}>
  <Text>text one</Text>
  <Text>text two</Text>
</View>
    </View>
  );
};

export default Sales;

const styles = StyleSheet.create({});
