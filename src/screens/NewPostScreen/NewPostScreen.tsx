import React, {useState} from 'react';
import {
  View,
  Text,
  // Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeStackParamList} from '@/types/app';
import styles from './styles';

type Props = NativeStackScreenProps<HomeStackParamList, 'NewPost'>;

const NewPostScreen: React.FC<Props> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');

  const handleShare = () => {
    // Implement share logic (e.g., API call to post)
    console.log('Share:', {caption, tags});
    navigation.goBack(); // Navigate back after sharing
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg width={24} height={24} fill="#0D151C" viewBox="0 0 256 256">
              <Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New Post</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Image Preview */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.imageContainer}>
            {/* <Image
              source={{uri: imageUrl}}
              style={styles.image}
              resizeMode="cover"
            /> */}
          </View>

          {/* Caption Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.captionInput}
              placeholder="Write a caption..."
              placeholderTextColor="#49779C"
              multiline
              value={caption}
              onChangeText={setCaption}
            />
          </View>

          {/* Tags Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.tagsInput}
              placeholder="Add tags"
              placeholderTextColor="#49779C"
              value={tags}
              onChangeText={setTags}
            />
          </View>
        </ScrollView>

        {/* Share Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPostScreen;
