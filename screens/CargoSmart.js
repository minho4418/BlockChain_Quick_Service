import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { ThemeColors } from 'react-navigation';

export default class CargoSmart extends React.Component {
  render() {
    return (
      <View>
        <Text>CargoSmart</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = { phonenumber: '', password: '' };
  }
}

const styles = StyleSheet.create({});
