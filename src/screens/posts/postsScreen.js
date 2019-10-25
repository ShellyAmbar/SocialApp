import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { Header, Left, Right } from "native-base";
import { BackHandler } from "react-native";
import { AsyncStorage } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  ButtonGroup
} from "react-native-elements";
import {
  getAllPostsAction,
  getPostsByUserIdAction,
  addNewPostAction,
  deletePostByIdAction
} from "../../redux/actions/posts";

const mapStateToProps = state => {
  return {
    allPosts: state.posts.allPosts,
    isAddedNewPost: state.posts.isAddedNewPost,
    postsByUserId: state.posts.postsByUserId,
    isPostDeleted: state.posts.isPostDeleted,
    errorMassage: state.posts.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMyPosts: token => dispatch(getPostsByUserIdAction(token)),
    getAllPosts: token => dispatch(getAllPostsAction(token)),
    addPost: (title, image_url, token) =>
      dispatch(addNewPostAction(title, image_url, token)),
    deletePost: (postId, token) => dispatch(deletePostByIdAction(postId, token))
  };
};
class PostsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      selectedIndex: 0,
      newPostTitle: "",
      newPostImageUrl: ""
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.deletePostById = this.deletePostById.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
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

  async addNewPost() {
    await this.props.addPost(
      this.state.newPostName,
      this.state.newPostImageUrl,
      this.state.token
    );
  }

  async deletePostById(post_id) {
    await this.props.deletePost(post_id, this.state.token);
  }

  onChangeTitle(value) {
    this.setState({
      newPostTitle: value
    });
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    this.setState({
      token: token
    });
    await this.props.getAllPosts(token);
    await this.props.getMyPosts(token);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  state = {};
  render() {
    const buttons = ["My Posts", "All Posts", "Add Post"];
    const { selectedIndex } = this.state;
    const { allPosts, postsByUserId } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 70 }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {selectedIndex == 0 &&
            postsByUserId.length > 0 &&
            postsByUserId.map((u, i) => {
              <View key={i}>
                <Card title={u.title} containerStyle={{ borderRadius: 20 }}>
                  <Text style={{ marginBottom: 10 }}>post detailes</Text>
                </Card>
              </View>;
            })}
          {selectedIndex == 1 &&
            allPosts.length > 0 &&
            allPosts.map((u, i) => {
              <View key={i}>
                <Card title={u.title} containerStyle={{ borderRadius: 20 }}>
                  <Text style={{ marginBottom: 10 }}>post detailes</Text>
                </Card>
              </View>;
            })}
          {selectedIndex == 2 && (
            <View>
              <TextInput
                onChange={this.onChangeTitle}
                value={this.state.newPostTitle}
                placeholder="Enter here the title"
              ></TextInput>
              <Button title="Add new post" onPress={this.addNewPost}></Button>
            </View>
          )}
        </View>
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsScreen);
