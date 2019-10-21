import React, { Component } from "react";

import styles from "./styles";
import { Header, Left, Right } from "native-base";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { getFollowersByUserIdAction } from "../../redux/actions/followers";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    followersById: state.followers.followersById,
    errorMassage: state.followers.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFollows: () => dispatch(getFollowersByUserIdAction()),

    dispatch
  };
};

class FollowsScreen extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    try {
      await this.props.getFollows();
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const followsArray = this.props.followersById;
    {
      return (
        <View style={{ flex: 1 }}>
          {Array(followsArray).length != 0 && this.props.errorMassage == "" && (
            <Card containerStyle={{ padding: 0 }}>
              {followsArray.map((u, i) => {
                return <ListItem key={i} roundAvatar title={u.name} />;
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
