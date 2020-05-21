import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BrandName from './Screens/BrandName';
import BrandLogin from './Screens/BrandLogin';

import {DrawerAction} from './Redux/Action/DrawerAction';
import DrawerApp from './Screens/Drawer';
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();

const StackApp = () => {
  return (
    <Stack1.Navigator initialRouteName="BrandName">
      <Stack1.Screen
        name="BrandName"
        component={BrandName}
        options={{headerShown: false}}
      />
      <Stack1.Screen
        name="BrandLogin"
        component={BrandLogin}
        options={{headerShown: false}}
      />
    </Stack1.Navigator>
  );
};

const App = props => {
  console.log(props.trueBrand);
  return (
    <NavigationContainer>
      <Stack2.Navigator>
        {!props.trueBrand ? (
          <Stack2.Screen
            name="StackApp"
            component={StackApp}
            options={{headerShown: false}}
          />
        ) : (
          <Stack2.Screen
            name="DrawerApp"
            component={DrawerApp}
            options={{headerShown: false}}
          />
        )}
      </Stack2.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    trueBrand: state.Sign.trueBrand,
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
)(App);
