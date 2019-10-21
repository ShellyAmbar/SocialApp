import EStyleSheet from "react-native-extended-stylesheet";
import Colors from "../../../constants/Colors";
import { Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get("window");
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$pink",
    alignItems: "center"
  },
  logo: {
    marginTop: 60,
    width: 250,
    height: 220
  },
  title: {
    margin: 5,
    fontSize: 40,
    color: Colors.$white
  },
  searchSection: {
    width: WIDTH - 55,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 60,

    borderRadius: 25,
    fontSize: 16,

    borderColor: Colors.$white,
    borderWidth: 3,
    color: Colors.$white
  },

  btnEye: {
    position: "absolute",
    right: 15,
    top: 10
  },
  btnLogin: {
    marginRight: 30,
    marginTop: 20
  },
  btnSignup: {
    marginLeft: 30,
    marginTop: 20
  },
  actionText: {
    color: Colors.$white,
    fontSize: 16
  }
});

export default styles;
