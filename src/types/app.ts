export type TabParamList = {
  Home: undefined;
  Outfit: undefined;
  Profile: undefined;
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
