import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import { ProfileScreen } from "../screens/profile";
import { SearchScreen } from "../screens/search";
import { PostsScreen } from "../screens/posts";
import { ActivitiesScreen } from "../screens/activities";
import { Icon } from "native-base";
import Colors from "../../constants/Colors";

const HomeStack = createStackNavigator(
  {
    Home: PostsScreen
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

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
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

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

ProfileStack.path = "";

const ActivitiesStack = createStackNavigator(
  {
    Activities: ActivitiesScreen
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

ActivitiesStack.navigationOptions = {
  tabBarLabel: "Activities",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
    />
  )
};

ActivitiesStack.path = "";

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
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

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

SearchStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack },
    Activities: { screen: ActivitiesStack },
    Search: { screen: SearchStack }
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
