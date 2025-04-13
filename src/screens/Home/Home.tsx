import React from 'react';
import {View, Text} from 'react-native';

import {useTranslation} from 'react-i18next';

import styles from './styles';
import ScrollViewComp from '@/components/ScrollView';
import MostRated from './components/MostRated/MostRated';
import CreateOutfit from './components/CreatOutfit/CreateOutfit';

const HomeScreen: React.FC = () => {
  const {t} = useTranslation();

  return (
    <ScrollViewComp id="Home Scroll" contentContainerStyle={styles.main}>
      <View id="Title Main" style={styles.titleMain}>
        <Text id="Outfit Titles" style={styles.title}>
          {t('Outfit')}
        </Text>
      </View>
      <MostRated />
      <CreateOutfit />
    </ScrollViewComp>
  );
};

export default HomeScreen;
