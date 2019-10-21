import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { Header, Left, Right } from "native-base";
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
    getMyPosts: () => dispatch(getPostsByUserIdAction()),
    getAllPosts: () => dispatch(getAllPostsAction()),
    addPost: () => dispatch(addNewPostAction()),
    deletePost: () => dispatch(deletePostByIdAction()),

    dispatch
  };
};
class PostsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      newPostTitle: "",
      newPostImageUrl: ""
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.deletePostById = this.deletePostById.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  async addNewPost() {
    await this.props.addPost(
      this.state.newPostName,
      this.state.newPostImageUrl
    );
  }

  async deletePostById(post_id) {
    await this.props.deletePost(post_id);
  }

  onChangeTitle(value) {
    this.setState({
      newPostTitle: value
    });
  }

  async componentDidMount() {
    await this.props.getAllPosts();
    await this.props.getMyPosts();
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  state = {};
  render() {
    const buttons = ["My Posts", "All Posts", "Add Post"];
    const { selectedIndex } = this.state;
    const allPostsArray = this.props.allPosts;
    const myPostsArray = this.props.postsByUserId;
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
            Array(myPostsArray).length != 0 &&
            myPostsArray.map((u, i) => {
              <View key={i}>
                <Card title={u.title} containerStyle={{ borderRadius: 20 }}>
                  <Text style={{ marginBottom: 10 }}>post detailes</Text>
                </Card>
              </View>;
            })}
          {selectedIndex == 1 &&
            Array(allPostsArray).length != 0 &&
            allPostsArray.map((u, i) => {
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
