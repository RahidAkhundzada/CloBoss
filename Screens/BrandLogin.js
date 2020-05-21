import React from 'react';
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
import {BrandLog} from '../Redux/Action/SignIn';

const BrandLogin = props => {
  const navigation = useNavigation();
  let Email, Password;

  const Go = () => {
    console.log(Email);
    if ((Email = 'demo@clopos.com' && Password === 'demo123')) {
      props.BrandLog(true);
    } else {
      alert('Please correct your Email and Password');
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Clopos Boss" isHome="true" navigation={navigation} />
      <View style={styles.Body}>
        <Text style={styles.TextStyle1}>{props.BrandName}</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          autoFocus={true}
          keyboardType="email-address"
          onChangeText={text => (Email = text)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => (Password = text)}
        />
        <TouchableOpacity style={styles.ButtonStyle} onPress={() => Go()}>
          <Text style={styles.TextStyle}>Go</Text>
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
  return {
    BrandLog: value => {
      dispatch(BrandLog(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrandLogin);

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
