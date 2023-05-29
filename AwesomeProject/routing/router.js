import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from '../screens/auth/RegistrationScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import Home from '../screens/main/HomeScreen';
import Profile from '../screens/main/ProfileScreen';
import CreatePost from '../screens/main/CreatePostsScreen';
import Comment from '../screens/main/CommentsScreen';
import Map from '../screens/main/MapScreen';

import LogOutBtn from '../components/buttons/LogOutBtn';
import PostsIcon from '../assets/icons/posts';
import AddIcon from '../assets/icons/add';
import UserIcon from '../assets/icons/user';

import { TabBarIcon } from '../components/TabBarIcon';

const AuthStack = createStackNavigator();
const NestedScreen = createStackNavigator();
const Tabs = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#212121',
        tabBarStyle: {
          height: 58,
          display: 'flex',
          alignItems: 'center',
        },

        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 0,
          elevation: 1,
        },
        headerTintColor: '#212121',
        headerTitleStyle: {
          fontFamily: 'robotoMedium',
          fontSize: 17,
          lineHeight: 22,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={Home}
        options={({ navigation }) => ({
          title: 'Публікації',

          headerRight: () => <LogOutBtn />,
          //tabs
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TabBarIcon
                IconComponent={PostsIcon}
                focused={focused}
                size={size}
                color={color}
              />
            );
          },
        })}
      />

      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePost}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TabBarIcon
                IconComponent={AddIcon}
                focused={focused}
                size={13}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TabBarIcon
                IconComponent={UserIcon}
                focused={focused}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}

//home page navigator to open comment screen
const HomeNav = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={Map}
        options={{
          headerBackTitleVisible: false,
          title: 'Мапа',
          headerTintColor: '#212121',
          headerTitleStyle: {
            fontFamily: 'robotoMedium',
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitleAlign: 'center',
        }}
      />
      <NestedScreen.Screen
        name="CommentScreen"
        component={Comment}
        options={{
          title: 'Коментарі',
          headerTintColor: '#212121',
          headerTitleStyle: {
            fontFamily: 'robotoMedium',
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitleAlign: 'center',
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return <HomeNav />;
}