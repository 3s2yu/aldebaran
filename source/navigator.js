import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import SettingsScreen from './screens/settings';

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(AppNavigator);
