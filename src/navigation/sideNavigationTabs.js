import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Platform
} from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import { FollowsScreen } from "../screens/follows";
import { FollowersScreen } from "../screens/followers";
import { SettingsScreen } from "../screens/settings";
import { ProfileScreen } from "../screens/profile";
import { SearchScreen } from "../screens/search";
import { PostsScreen } from "../screens/posts";
import { ActivitiesScreen } from "../screens/activities";
import Colors from "../../constants/Colors";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation";
import buttomNavigator from "./MainTabNavigator";
import { Icon } from "native-base";

const CustomDrawerComponent = props => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.$pink }}>
      <View
        style={{
          height: 150,
          backgroundColor: Colors.$pink,
          alignItems: "center",
          justifyContent: "center"
        }}
      ></View>
      <ScrollView>
        <DrawerNavigatorItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const DashboardStackNavigation = createStackNavigator({
  buttomNavigator: buttomNavigator
});

const FollowsStackNavigation = createStackNavigator(
  {
    Follows: FollowsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 15, color: Colors.$red }}
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

const FollowersStackNavigation = createStackNavigator(
  {
    Followers: FollowersScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 15, color: Colors.$red }}
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

const SettingsStackNavigation = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 15, color: Colors.$red }}
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

export default createDrawerNavigator(
  {
    Dashboard: { screen: DashboardStackNavigation },
    Follows: { screen: FollowsStackNavigation },
    Followers: { screen: FollowersStackNavigation },
    Settings: { screen: SettingsStackNavigation }
  },
  {
    contentComponent: CustomDrawerComponent
  }
);
