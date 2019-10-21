import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Header, Left, Right, Icon } from "native-base";
import { Avatar } from "react-native-elements";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.openCamera = this.openCamera.bind(this);
  }
  //get and set permissions to camera
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  state = {
    isOpenCameraClicked: false,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };
  openCamera() {
    if (this.state.isOpenCameraClicked) {
      this.setState({
        isOpenCameraClicked: false
      });
    } else {
      this.setState({
        isOpenCameraClicked: true
      });
    }
  }

  render() {
    const { hasCameraPermission, isOpenCameraClicked } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
          <Avatar
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
            }}
            showEditButton
            onEditPress={this.openCamera}
            size="xlarge"
            rounded
          />
        </View>

        <View style={{ flex: 1 }}>
          {isOpenCameraClicked &&
            hasCameraPermission === null && <View /> &&
            console.log("no permissions")}
          {isOpenCameraClicked &&
            hasCameraPermission === false &&
            (<Text>No access to camera</Text> && console.log("no permissions"))}

          {isOpenCameraClicked &&
            hasCameraPermission === true && (
              <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={this.state.type}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "transparent",
                      flexDirection: "row"
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 0.1,
                        alignSelf: "flex-end",
                        alignItems: "center"
                      }}
                      onPress={() => {
                        this.setState({
                          type:
                            this.state.type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back
                        });
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          color: "white"
                        }}
                      >
                        {" "}
                        Flip{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Camera>
              </View>
            ) &&
            console.log("has permissions")}
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
