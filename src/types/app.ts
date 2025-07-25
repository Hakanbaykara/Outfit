export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Auth: undefined;
};

export type LoginStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  PostDetail: {postId: string; imageUrl: string};
  NewPost: {imageUrl: string};
};

export type ProfileStackParamList = {
  ProfilePage: undefined;
  PostDetail: {postId: string; imageUrl: string};
  NewPost: undefined;
  Settings: undefined;
};
