import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// import {useAppSelector, useAppDispatch} from '../redux/store';
import {useAppDispatch} from '@/redux/store';
import {increment} from '@/redux/reducers/outfit';

import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '@/types/app';

import styles from './styles';

const COMMENTS = [
  {
    id: 'c1',
    name: 'Olivia',
    avatar: 'https://...',
    time: '2d',
    text: "This outfit is so inspiring! I'm definitely trying this look.",
  },
  {
    id: 'c2',
    name: 'Ethan',
    avatar: 'https://...',
    time: '1d',
    text: "Love the color palette. It's so well‑coordinated.",
  },
];

type PostDetailScreenRouteProp = RouteProp<HomeStackParamList, 'PostDetail'>;

interface Props {
  route: PostDetailScreenRouteProp;
}

const PostDetailScreen: React.FC<Props> = ({route}) => {
  const dispatch = useAppDispatch();
  const {postId, imageUrl} = route.params;
  //   const counter = useAppSelector(state => state.outfit.value);

  return (
    <SafeAreaView id={`${postId}-DetailView`} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>{/* ← Icon */}</TouchableOpacity>
        <TouchableOpacity>{/* ⋯ Icon */}</TouchableOpacity>
      </View>

      <Image source={{uri: imageUrl}} style={styles.mainImage} />

      <View style={styles.contentWrapper}>
        <View style={styles.userInfo}>
          <Image source={{uri: imageUrl}} style={styles.avatarLarge} />
          <View>
            <Text style={styles.username}>Sophia</Text>
            <Text style={styles.handle}>@sophia.styles</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Casual chic with a touch of elegance. Love how the accessories elevate
          the whole look!
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => dispatch(increment())}
            style={styles.actionItem}>
            <Text style={styles.iconText}>❤️</Text>
            <Text style={styles.iconCount}>234</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Text style={styles.iconText}>💬</Text>
            <Text style={styles.iconCount}>56</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Text style={styles.iconText}>✈️</Text>
            <Text style={styles.iconCount}>12</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.commentTitle}>Comments</Text>
        <FlatList
          data={COMMENTS}
          keyExtractor={c => c.id}
          scrollEnabled={false}
          renderItem={({item}) => (
            <View style={styles.commentRow}>
              <Image source={{uri: item.avatar}} style={styles.avatarSmall} />
              <View style={styles.commentTextWrapper}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentName}>{item.name}</Text>
                  <Text style={styles.commentTime}>{item.time}</Text>
                </View>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            </View>
          )}
        />

        <View style={styles.commentInputRow}>
          <Image source={{uri: 'https://...'}} style={styles.avatarSmall} />
          <View style={styles.commentInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Add a comment..."
              placeholderTextColor="#49779c"
            />
            <TouchableOpacity style={styles.imageIcon}>
              <Text style={styles.iconText}>📷</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostDetailScreen;
