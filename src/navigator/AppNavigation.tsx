import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  Theme,
} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '@/redux/store';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from 'i18next';

import styles from './styles';
import {
  TabParamList,
  HomeStackParamList,
  ProfileStackParamList,
  LoginStackParamList,
} from '@/types/app';
import HomeScreen from '@/screens/Home/Home';
import {getPhoneInfo} from '@/helpers';
import SignUpScreen from '@/screens/SignUpScreen/SignUpScreen';
import ProfileScreen from '@/screens/ProfileScreen/ProfileScreen';
import PostDetailScreen from '@/screens/PostDetailScreen/PostDetailScreen';
import NewPostScreen from '@/screens/NewPostScreen/NewPostScreen';

function OutfitScreen() {
  return (
    <View>
      <Text>Outfit Suggestions</Text>
    </View>
  );
}

const getTabIcon = (routeName: string, focused: boolean): any => {
  switch (routeName) {
    case 'Home':
      return focused
        ? require('@/assets/images/home_active.png') // active icon
        : require('@/assets/images/home.png');
    case 'Outfit':
      return focused
        ? require('@/assets/images/outfit_active.png') // active icon
        : require('@/assets/images/outfit.png');
    // case 'Wardrobe':
    //   return require('@/assets/images/wardrobe.png');
    // case 'Settings':
    //   return require('@/assets/images/settings.png');
    default:
      return require('@/assets/images/home.png');
  }
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: BottomTabNavigationProp<ParamListBase, string>;
  theme: Theme;
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarIcon: ({focused}) => {
    const iconSource = getTabIcon(route.name, focused);
    return <Image source={iconSource} style={styles.icon} />;
  },
});

// Stack Navigator for Home tab
const LoginStack = createNativeStackNavigator<LoginStackParamList>();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="SignUp" component={SignUpScreen} />
    </LoginStack.Navigator>
  );
}

// Stack Navigator for Home tab
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="PostDetail" component={PostDetailScreen} />
      <HomeStack.Screen name="NewPost" component={NewPostScreen} />
    </HomeStack.Navigator>
  );
}

// Stack Navigator for Profile tab
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfilePage" component={ProfileScreen} />
      <ProfileStack.Screen name="PostDetail" component={PostDetailScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator<TabParamList>();

export default function AppNavigator() {
  const isToken = useAppSelector(state => state.account.isToken);

  useEffect(() => {
    getPhoneInfo.getPhoneLanguage();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {!isToken && <Tab.Screen name="Login" component={LoginStackNavigator} />}
        {isToken && <Tab.Screen name="Home" component={HomeStackNavigator} />}
        {isToken && <Tab.Screen name="Outfit" component={OutfitScreen} />}
        {isToken && (
          <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
