import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Header from '../src/components/Header';

const BrandName = ({navigation}) => {
  let TEXT = null;

  const Next = () => {
    console.log(TEXT);
    if (TEXT === 'Demo') {
      navigation.navigate('BrandLogin');
    } else {
      alert('Please correct your Brand Name');
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Clopos Boss" />
      <View style={styles.Body}>
        <Text style={styles.TextStyle1}>Brand Sign-In</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Brand Name"
          autoFocus={true}
          onChangeText={text => (TEXT = text)}
        />
        <TouchableOpacity style={styles.ButtonStyle} onPress={() => Next()}>
          <Text style={styles.TextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    BrandName: state.Sign.brandName,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  null,
  null,
)(BrandName);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7222D1',
  },
  Body: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  TextStyle: {
    fontSize: 30,
    color: 'white',
  },
  TextStyle1: {
    fontSize: 30,
  },
  TextInput: {
    marginTop: 30,
    borderBottomColor: '#7222D1',
    borderBottomWidth: 0.5,
    width: '90%',
  },
  ButtonStyle: {
    margin: 50,
    backgroundColor: '#7222D1',
    width: '90%',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
  },
});
