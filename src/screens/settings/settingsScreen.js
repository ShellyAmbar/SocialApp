import React, { Component } from "react";
import { Text, View, Image, TextInput } from "react-native";
import styles from "./styles";
import { Header, Left, Right } from "native-base";
import { CheckBox } from "react-native-elements";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.onCheckSmoking = this.onCheckSmoking.bind(this);
    this.onTextSmokingChanged = this.onTextSmokingChanged.bind(this);
    this.onCheckedDrinking = this.onCheckedDrinking.bind(this);
    this.onTextDrinkingChanged = this.onTextDrinkingChanged.bind(this);
    this.onCheckedAnimals = this.onCheckedAnimals.bind(this);
    this.onTextAnimalsChanged = this.onTextAnimalsChanged.bind(this);
    this.onCheckedLivingWithFamily = this.onCheckedLivingWithFamily.bind(this);
    this.onTextLivingChenged = this.onTextLivingChenged.bind(this);
    this.onCheckedWorking = this.onCheckedWorking.bind(this);
    this.onTextWorkChenged = this.onTextWorkChenged.bind(this);
    this.onCheckedReligious = this.onCheckedReligious.bind(this);
    this.onTextReligiousChanged = this.onTextReligiousChanged.bind(this);

    this.state = {
      checked_smoking: false,
      text_smoking: "",
      checked_drinking: false,
      text_drinking: "",
      checked_animals: false,
      text_animals: "",
      checked_living_family: false,
      text_living: "",
      checked_working: false,
      text_work: "",
      checked_religious: false,
      text_religious: ""
    };
  }

  onCheckSmoking() {
    if (this.state.checked_smoking) {
      this.setState({
        checked_smoking: false
      });
    } else {
      this.setState({
        checked_smoking: true
      });
    }
  }
  onTextSmokingChanged(text) {
    this.setState({
      text_smoking: text
    });
  }

  onCheckedDrinking() {
    if (this.state.checked_drinking) {
      this.setState({
        checked_drinking: false
      });
    } else {
      this.setState({
        checked_drinking: true
      });
    }
  }

  onTextDrinkingChanged(text) {
    this.setState({
      text_drinking: text
    });
  }

  onCheckedAnimals() {
    if (this.state.checked_animals) {
      this.setState({
        checked_animals: false
      });
    } else {
      this.setState({
        checked_animals: true
      });
    }
  }
  onTextAnimalsChanged(text) {
    this.setState({
      text_animals: text
    });
  }

  onCheckedLivingWithFamily() {
    if (this.state.checked_living_family) {
      this.setState({
        checked_living_family: false
      });
    } else {
      this.setState({
        checked_living_family: true
      });
    }
  }

  onTextLivingChenged(text) {
    this.setState({
      text_living: text
    });
  }
  onCheckedWorking() {
    if (this.state.checked_working) {
      this.setState({
        checked_working: false
      });
    } else {
      this.setState({
        checked_working: true
      });
    }
  }

  onTextWorkChenged(text) {
    this.setState({
      text_work: text
    });
  }
  onCheckedReligious() {
    if (this.state.checked_religious) {
      this.setState({
        checked_religious: false
      });
    } else {
      this.setState({
        checked_religious: true
      });
    }
  }

  onTextReligiousChanged(text) {
    this.setState({
      text_religious: text
    });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <CheckBox
          title="Are you smoking?"
          onPress={this.onCheckSmoking}
          checked={this.state.checked_smoking}
        />
        <TextInput
          style={{ padding: 5, paddingStart: 10 }}
          placeholder="if yes, tell us about it."
          onChange={this.onTextSmokingChanged}
          value={this.state.text_smoking}
        />
        <CheckBox
          title="Are you drinking?"
          onPress={this.onCheckedDrinking}
          checked={this.state.checked_drinking}
        />
        <TextInput
          style={{ padding: 5, paddingStart: 10 }}
          placeholder="if yes, tell us about it."
          onChange={this.onTextDrinkingChanged}
          value={this.state.text_drinking}
        />
        <CheckBox
          title="Do you have animals?"
          onPress={this.onCheckedAnimals}
          checked={this.state.checked_animals}
        />
        <TextInput
          style={{ padding: 5, paddingStart: 10 }}
          placeholder="if yes, tell us about them."
          onChange={this.onTextAnimalsChanged}
          value={this.state.text_animals}
        />
        <CheckBox
          title="Do you live with your family?"
          onPress={this.onCheckedLivingWithFamily}
          checked={this.state.checked_living_family}
        />
        <TextInput
          style={{ padding: 5, paddingStart: 10 }}
          placeholder="if yes, tell us about it."
          onChange={this.onTextLivingChenged}
          value={this.state.text_living}
        />
        <CheckBox
          title="Are you working?"
          onPress={this.onCheckedWorking}
          checked={this.state.checked_working}
        />
        <TextInput
          style={{ padding: 5, paddingStart: 10 }}
          placeholder="if yes, tell us about your work place."
          onChange={this.onTextWorkChenged}
          value={this.state.text_work}
        />
        <CheckBox
          title="Are you religious?"
          onPress={this.onCheckedReligious}
          checked={this.state.checked_religious}
        />
        <TextInput
          style={{ padding: 5, paddingStart: 10 }}
          placeholder="if yes, tell us about it."
          onChange={this.onTextReligiousChanged}
          value={this.state.text_religious}
        />
      </View>
    );
  }
}
export default SettingsScreen;
