import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Header, Left, Right, Icon } from "native-base";
import { SearchBar } from "react-native-elements";
import { BackHandler } from "react-native";
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  state = {
    search: ""
  };

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

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}
export default SearchScreen;
