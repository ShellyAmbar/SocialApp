import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Platform,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import logo from "../../../assets/images/logo.png";
import Colors from "../../../constants/Colors";
import TextIcon from "../../components/textIcon";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "native-base";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { registerAction } from "../../redux/actions/auth";
import { string } from "prop-types";
import userData from "../../../constants/user_data";
import { Overlay } from "react-native-elements";
import { AsyncStorage } from "react-native";

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user_id: state.auth.user_id,
    errorMassage: state.auth.errorMassage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: (email, password) => dispatch(registerAction(email, password))
  };
};
class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBack = this.onBack.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.storeData = this.storeData.bind(this);
    this.state = {
      shohPass: true,
      email: this.props.email != null ? this.props.email : "",
      password: this.props.password != null ? this.props.password : "",
      user_name: ""
    };
  }

  async storeData(token, user_id) {
    try {
      await AsyncStorage.setItem("token", token + "");
      await AsyncStorage.setItem("user_id", user_id + "");
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit() {
    var email = String(this.state.email).toString();
    var password = String(this.state.password).toString();
    if (
      String(email)
        .toString()
        .includes("@")
    ) {
      if (String(password).toString().length >= 6) {
        try {
          //register to api with redux
          console.log(email, " ", password);
          await this.props.register(email, password);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log(
          String(password).toString() + " is must be more then 5 digits"
        );
      }
    } else {
      console.log(String(email).toString() + "   must contain '@' sign.");
    }
  }

  onBack = () => {
    this.props.navigation.navigate("Login");
  };

  showPass = () => {
    if (this.state.showPass == true) {
      this.setState({
        showPass: false
      });
    } else {
      this.setState({
        showPass: true
      });
    }
  };

  handleEmailChange(text) {
    this.setState({
      email: text
    });
  }

  handlePasswordChange(text) {
    this.setState({
      password: text
    });
  }

  handleUserNameChange(text) {
    this.setState({
      user_name: text
    });
  }

  state = {};

  render() {
    var isOverlayVisible = false;
    if (this.props.errorMassage != "") {
      isOverlayVisible = true;
      console.log(this.props.errorMassage + " ERROR REGISTER");
    } else {
      isOverlayVisible = false;

      if (this.props.token != "" && this.props.user_id != "") {
        console.log("entered in success");
        //save data in app storage
        this.storeData(this.props.token, this.props.user_id);
        console.log("Successfully saved token and user-id");
        this.props.navigation.navigate("Dashboard");
      }
    }
    return (
      <View style={styles.container}>
        <Overlay
          isVisible={isOverlayVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="red"
          width="auto"
          height="auto"
          onRequestClose={() => (isOverlayVisible = false)}
          onBackdropPress={() => (isOverlayVisible = false)}
        >
          <Text>{this.props.errorMassage}</Text>
        </Overlay>

        <Image style={styles.logo} source={logo} />
        <View>
          <Text style={styles.title}> Sign Up </Text>
          <Text style={styles.title}> And start DATING ! </Text>
        </View>
        <View style={styles.searchSection}>
          <Icon
            style={{ position: "absolute", left: 15, top: 10 }}
            name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
            size={26}
            color={Colors.$brown}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            placeholder="Enter your email"
            style={styles.textInput}
            placeholderTextColor={Colors.$white}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
          />
        </View>

        <View style={styles.searchSection}>
          <Icon
            style={{ position: "absolute", left: 15, top: 10 }}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            size={26}
            color={Colors.$brown}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            placeholder="Enter your FullName"
            style={styles.textInput}
            placeholderTextColor={Colors.$white}
            onChangeText={this.handleUserNameChange}
            value={this.state.user_name}
          />
        </View>

        <View style={styles.searchSection}>
          <Icon
            style={{ position: "absolute", left: 15, top: 10 }}
            size={26}
            color={Colors.$brown}
            name={Platform.OS === "ios" ? "ios-key" : "md-key"}
          />
          <TextInput
            underlineColorAndroid={"transparent"}
            placeholder="Enter your password"
            style={styles.textInput}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={Colors.$white}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}
          >
            <Icon
              size={26}
              color={Colors.$white}
              name={
                Platform.OS === "ios"
                  ? this.state.showPass == true
                    ? "ios-eye"
                    : "ios-eye-off"
                  : this.state.showPass == true
                  ? "md-eye"
                  : "md-eye-off"
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity style={styles.btnLogin} onPress={this.onBack}>
            <Text style={styles.actionText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSignup} onPress={this.onSubmit}>
            <Text style={styles.actionText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);
