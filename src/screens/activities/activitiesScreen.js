import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Header, Left, Right, Icon } from "native-base";
import { BackHandler } from "react-native";

class ActivitiesScreen extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    this.props.navigation.navigate("Login");
    return true;
  }
  render() {
    return <View style={{ flex: 1 }}></View>;
  }
}
export default ActivitiesScreen;
