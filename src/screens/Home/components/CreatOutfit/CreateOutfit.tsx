import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {HomeScreenNavigationProp} from '@/types/app';
import styles from './styles';

const CreateOutfit: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const navigateToOutfit = () => {
    navigation.navigate('Outfit');
  };
  return (
    <TouchableOpacity
      onPress={navigateToOutfit}
      id="Create Main"
      style={styles.outfitMain}>
      <Text id="Create Your Next Outfit" style={styles.outfitTitle}>
        {t('create_outfit')}
      </Text>
    </TouchableOpacity>
  );
};

export default CreateOutfit;
