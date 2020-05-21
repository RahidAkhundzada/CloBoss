import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {TagAction} from '.././../Redux/Action/TagAction';
import {useNavigation} from '@react-navigation/native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const CustomHeader = props => {
  const navigation = useNavigation();
  const TagChanger = () => {
    if (props.Tagger) {
      props.TagAction(false);
    } else {
      props.TagAction(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.First}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../Image/drawer.png')}
            style={styles.imgStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Second}>
        <Text>Demo Restoran</Text>
      </View>

      <View style={styles.Third}>
        {!props.Other ? (
          <TouchableOpacity onPress={() => TagChanger()}>
            <Image
              source={require('../Image/date.png')}
              style={styles.imgStyle}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.Forth}>
        <TouchableOpacity>
          <Image
            source={require('../Image/others.png')}
            style={styles.imgStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    Tagger: state.Tag.tag,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    TagAction: value => {
      dispatch(TagAction(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Height / 15,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: Width / 10,
    width: Width / 10,
  },
  First: {
    width: Width * 0.15,
    marginLeft: 5,
  },
  Second: {
    width: Width * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Third: {
    width: Width * 0.15,
  },
  Forth: {
    width: Width * 0.15,
  },
});
