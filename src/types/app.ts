export type TabParamList = {
  Home: undefined;
  Outfit: undefined;
  Profile: undefined;
  Login: undefined;
};

export type LoginStackParamList = {
  SignUp: undefined;
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
};
