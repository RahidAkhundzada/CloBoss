import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
const SWidth = Dimensions.get('window').width;
const SHeight = Dimensions.get('window').height;

import Home from './Drawer/Home';
import Cheque from './Drawer/Cheque';
import Reserve from './Drawer/Reserve';
import Sales from './Drawer/Sales';
import Statistics from './Drawer/Statistics';

import DrawerChanger from './Drawer/DrawerChanger';
import {DrawerAction} from '../Redux/Action/DrawerAction';
import {BrandLog} from '../Redux/Action/SignIn';

const Drawer = createDrawerNavigator();

const DrawerApp = props => {
  const GetDrawer = () => {
    if (props.Drawer === true) {
      props.DrawerAction(false);
    } else {
      props.DrawerAction(true);
    }
    console.log(props.Drawer);
  };
  const LogOut = () => {
    props.BrandLog(false);
  };

  const CustomDrawer = props => {
    let menu = null;

    const setMenuRef = ref => {
      menu = ref;
    };
    const showMenu = () => {
      menu.show();
    };

    return (
      <SafeAreaView>
        <View style={{borderBottomWidth: 0.3, height: SWidth / 10}}>
          <Text>ok</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.BtnStyle} onPress={() => GetDrawer()}>
            <Image
              source={require('../src/Image/changeDrawer.png')}
              style={styles.ImgStyle1}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Sales')}
            style={styles.BtnStyle}>
            <Image
              source={require('../src/Image/Sales.png')}
              style={styles.ImgStyle}
            />
            <Text style={styles.TextStyle1}>Sales</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Statistics')}
            style={styles.BtnStyle}>
            <Image
              source={require('../src/Image/Statistics.png')}
              style={styles.ImgStyle}
            />
            <Text style={styles.TextStyle1}>Statistics</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Cheque')}
            style={styles.BtnStyle}>
            <Image
              source={require('../src/Image/Cheque.png')}
              style={styles.ImgStyle}
            />
            <Text style={styles.TextStyle1}>Cheque</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Reserve')}
            style={styles.BtnStyle}>
            <Image
              source={require('../src/Image/Stock.png')}
              style={styles.ImgStyle}
            />
            <Text style={styles.TextStyle1}>Reserve</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <TouchableOpacity onPress={showMenu} style={styles.BtnStyle}>
            <Image
              source={require('../src/Image/Finance.png')}
              style={styles.ImgStyle}
            />

            <Menu
              ref={setMenuRef}
              button={
                <Text onPress={showMenu} style={styles.TextStyle1}>
                  Finance
                </Text>
              }>
              <MenuItem>Accounts</MenuItem>
              <MenuItem>Operations</MenuItem>
            </Menu>
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <TouchableOpacity onPress={() => LogOut()} style={styles.BtnStyle}>
            <Image
              source={require('../src/Image/logout.png')}
              style={styles.ImgStyle}
            />
            <Text style={styles.TextStyle1}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const CustomDrawer1 = props => {
    return (
      <SafeAreaView>
        <View style={{borderBottomWidth: 0.3, height: SWidth / 10}}>
          <Text>ok</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.BtnStyle} onPress={() => GetDrawer()}>
            <Image
              source={require('../src/Image/changeDrawer.png')}
              style={styles.ImgStyle1}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Card}>
          <Text>Demo Restoran</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={
        props.Drawer
          ? props => <CustomDrawer {...props} />
          : props => <CustomDrawer1 {...props} />
      }>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sales" component={Sales} />
      <Drawer.Screen name="Cheque" component={Cheque} />
      <Drawer.Screen name="Reserve" component={Reserve} />
      <Drawer.Screen name="Statistics" component={Statistics} />
      <Drawer.Screen name="DrawerChanger" component={DrawerChanger} />
    </Drawer.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    SignIn: state.Sign.trueBrand,
    Drawer: state.Drawer.drawer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    DrawerAction: value => {
      dispatch(DrawerAction(value));
    },
    BrandLog: value => {
      dispatch(BrandLog(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Card: {
    marginLeft: 5,
    marginTop: 5,
  },

  BtnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ImgStyle: {
    height: SWidth / 20,
    width: SWidth / 20,
  },

  ImgStyle1: {
    height: SWidth / 10,
    width: SWidth / 10,
  },

  TextStyle1: {
    fontSize: 30,
    marginLeft: 15,
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
