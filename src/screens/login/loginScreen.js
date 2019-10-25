import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert
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
import { loginAction } from "../../redux/actions/auth";
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
    login: (email, password, token) =>
      dispatch(loginAction(email, password, token))
  };
};

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onDashboard = this.onDashboard.bind(this);
    this.retrieveData = this.retrieveData.bind(this);

    this.state = {
      isSubmit: false,
      isShowAlert: true,
      token: "",
      user_id: "",
      email: "",
      password: "",
      showPass: true
    };
  }

  async retrieveData() {
    try {
      const token = await AsyncStorage.getItem("token");
      const user_id = await AsyncStorage.getItem("user_id");

      if (token !== null && user_id != null) {
        // We have data!!
        this.setState({
          token: token,
          user_id: user_id
        });
      }
    } catch (error) {
      // Error retrieving data
      console.error(error);
    }
  }

  onDashboard() {
    //go to Dashboard page

    this.props.navigation.navigate("Dashboard");
  }

  async onSubmit() {
    var email = String(this.state.email).toString();
    var password = String(this.state.password).toString();
    if (
      String(email)
        .toString()
        .includes("@")
    ) {
      if (String(password).toString().length >= 4) {
        this.setState({
          isSubmit: true
        });
        try {
          await this.props.login(email, password, this.state.token);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log(
          String(password).toString() + "  must be more then 4 digits"
        );
      }
    } else {
      console.log(String(email).toString() + "  must contain '@' sign.");
    }
  }

  onSignUp = () => {
    //go to signup page and send the data

    this.props.navigation.navigate("SignUp", {
      email: this.state.email,
      password: this.state.password
    });
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
    this.setState(
      {
        email: text
      },
      console.log(this.state.email)
    );
  }

  handlePasswordChange(text) {
    this.setState(
      {
        password: text
      },
      console.log(this.state.password)
    );
  }
  async componentDidMount() {
    await this.retrieveData();
  }

  goToDashboard = () => {
    this.props.navigation.navigate("Dashboard");
  };

  openAlertEnter = () => {
    Alert.alert(
      "Hello, you are currently logged in.",
      "Would you like to enter? or sign in with another account?",
      [
        {
          text: "Enter my Dashboard",
          onPress: () => {
            console.log("Entered my Dashboard");
            this.goToDashboard();
            this.setState({
              isShowAlert: false
            });
          }
        },
        {
          text: "Ener with another account.",
          onPress: () => {
            console.log("OK Pressed");
            this.setState({
              isShowAlert: false
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    {
      <Overlay
        isVisible={this.props.errorMassage != "" ? true : false}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
        <Text>{this.props.errorMassage}</Text>
      </Overlay>;
      //if user is allready logged in

      if (
        this.props.token === this.state.token &&
        this.state.token !== "" &&
        this.state.isShowAlert
      ) {
        this.openAlertEnter();
      } else if (this.props.token !== "" && this.state.isSubmit) {
        this.goToDashboard();
      }
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <View>
          <Text style={styles.title}> DateNow!</Text>
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
            value={this.state.email}
            onChangeText={text => this.handleEmailChange(text)}
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
            value={this.state.password}
            onChangeText={text => this.handlePasswordChange(text)}
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
          <TouchableOpacity style={styles.btnLogin} onPress={this.onSubmit}>
            <Text style={styles.actionText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSignup} onPress={this.onSignUp}>
            <Text style={styles.actionText}>SignUp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSignup} onPress={this.onDashboard}>
            <Text style={styles.actionText}>Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
