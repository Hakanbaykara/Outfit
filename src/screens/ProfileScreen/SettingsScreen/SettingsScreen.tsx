// src/components/ProfileScreen.tsx
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '@/redux/store';
import {reset} from '@/redux/reducers/account';

import {ProfileStackParamList} from '@/types/app';
import styles from './styles';

import ArrowLeft from '@/assets/images/arrow-left.svg';
import ArrowRight from '@/assets/images/arrow-right.svg';

const SettingsScreen: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  const settings = [
    {
      label: t('profile.settings.editProfile'),
      // , onPress: () => navigation.navigate('EditProfile')
    },
    {label: t('profile.settings.notifications'), onPress: () => {}},
    {label: t('profile.settings.privacy'), onPress: () => {}},
    {label: t('profile.settings.about'), onPress: () => {}},
  ];

  const insets = useSafeAreaInsets();

  const handleSignOut = () => {
    dispatch(reset());
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft width={24} height={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('profile.settings.settings')}</Text>
        <View style={styles.rightView} />
      </View>

      {/* Settings List */}
      <ScrollView style={styles.listContainer}>
        {settings.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={item.onPress}>
            <Text style={styles.itemText}>{item.label}</Text>
            <ArrowRight width={24} height={24} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sign Out */}
      <View style={styles.signOutContainer}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>
            {t('profile.settings.signOut')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
