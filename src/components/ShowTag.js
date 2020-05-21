import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

const SWidth = Dimensions.get('window').width;
const SHeight = Dimensions.get('window').height;

const ShowTag = props => {
  return props.Tagger ? (
    <View />
  ) : (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Yesterday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Month</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    Tagger: state.Tag.tag,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ShowTag);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: SHeight / 20,
  },
  btnStyle: {
    backgroundColor: 'red',
    height: 25,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
