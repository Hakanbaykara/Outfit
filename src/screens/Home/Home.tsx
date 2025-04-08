import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import ScrollViewComp from '@/components/ScrollView';
import MostRated from './components/MostRated/MostRated';
import {HomeScreenNavigationProp} from '@/types/app';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateToOutfit = () => {
    navigation.navigate('Outfit');
  };
  return (
    <ScrollViewComp id="Home Scroll" contentContainerStyle={styles.main}>
      <View id="Title Main" style={styles.titleMain}>
        <Text id="Outfit Titles" style={styles.title}>
          Outfit
        </Text>
      </View>
      <TouchableOpacity
        onPress={navigateToOutfit}
        id="Create Main"
        style={styles.outfitMain}>
        <Text id="Create Your Next Outfit" style={styles.outfitTitle}>
          Create your next outfit
        </Text>
      </TouchableOpacity>
      <MostRated />
    </ScrollViewComp>
  );
};

export default HomeScreen;
