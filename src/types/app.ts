import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TabParamList = {
  Home: undefined;
  Outfit: undefined;
  Wardrobe: undefined;
  Settings: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  TabParamList,
  'Home'
>;
