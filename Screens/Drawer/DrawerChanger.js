import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {DrawerAction} from '../../Redux/Action/DrawerAction';

const DrawerChanger = props => {
  
  function Drawer() {
    if (props.Drawer === true) {
      props.DrawerAction(false);
    } else {
      props.DrawerAction(true);
    }
  }
 
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    Drawer: state.Drawer.drawer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    DrawerAction: value => {
      dispatch(DrawerAction(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerChanger);

const styles = StyleSheet.create({});
