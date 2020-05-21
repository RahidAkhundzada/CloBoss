import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../src/components/CustomHeader';
import ShowTag from '../../src/components/ShowTag';
const Home = ({navigation}) => {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <ShowTag />
      <Text>Hello</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
