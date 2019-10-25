import React, { Component } from "react";

import styles from "./styles";
import { Header, Left, Right } from "native-base";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { getFollowersByUserIdAction } from "../../redux/actions/followers";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

const mapStateToProps = state => {
  return {
    followersById: state.followers.followersById,
    errorMassage: state.followers.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFollows: token => dispatch(getFollowersByUserIdAction(token))
  };
};

class FollowsScreen extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem("token");
      await this.props.getFollows(token);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { followersById } = this.props;
    {
      return (
        <View style={{ flex: 1 }}>
          {followersById.length > 0 && this.props.errorMassage == "" && (
            <Card containerStyle={{ padding: 0 }}>
              {followersById.map((u, i) => {
                return <ListItem key={i} roundAvatar title={u.user_id} />;
              })}
            </Card>
          )}
        </View>
      );
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowsScreen);
