import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
const Wwidth = Dimensions.get('window').width;

const Header = ({title, isHome, navigation}) => {
  return (
    <View style={styles.Header}>
      {isHome ? (
        <TouchableOpacity onPress={() => navigation.navigate('BrandName')}>
          <Image
            style={{width: 30, height: 30, marginLeft: 5}}
            source={require('../Image/back.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}

      <View style={{marginLeft: Wwidth / 5}}>
        <Text style={styles.TextStyle}> {title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: '#7222D1',
    flexDirection: 'row',
  },

  TextStyle: {
    fontSize: 30,
    color: 'white',
  },
});
