import React, { Component } from "react";

import styles from "./styles";
import { Header, Left, Right } from "native-base";

import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import {
  getMyFollowersAction,
  addFollowerAction
} from "../../redux/actions/followers";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isAddedFollow: state.followers.isAddedFollow,
    myFollowers: state.followers.myFollowers,
    errorMassage: state.followers.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFollowers: () => dispatch(getMyFollowersAction()),
    addFollow: user_id => dispatch(addFollowerAction(user_id))
  };
};

class FollowersScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      await this.props.getFollowers();
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { myFollowers } = this.props;
    {
      return (
        <View style={{ flex: 1 }}>
          {myFollowers.length > 0 && this.props.errorMassage == "" && (
            <Card containerStyle={{ padding: 0 }}>
              {myFollowers.map((u, i) => {
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
)(FollowersScreen);
