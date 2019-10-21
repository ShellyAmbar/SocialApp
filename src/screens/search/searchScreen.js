import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Header, Left, Right, Icon } from "native-base";
import { SearchBar } from "react-native-elements";
class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: ""
  };

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
