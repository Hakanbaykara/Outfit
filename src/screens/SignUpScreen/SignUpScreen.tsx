import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoginStackParamList} from '@/types/app';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {getValidationSchema} from './validationSchema';

import {useTranslation} from 'react-i18next';

import styles from './styles';

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  const {t} = useTranslation();

  const schema = getValidationSchema(t);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      acceptTerms: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form verisi:', data);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backIconContainer}>
            {/* icon */}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('signUp.signUp')}</Text>
        </View>

        <View style={styles.formRow}>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                placeholder={t('signUp.email')}
                placeholderTextColor="#49769c"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
        </View>
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <View style={styles.formRow}>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                placeholder={t('signUp.password')}
                placeholderTextColor="#49769c"
                value={value}
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        <View style={styles.checkboxRow}>
          <Controller
            control={control}
            name="acceptTerms"
            render={({field: {value, onChange}}) => (
              <TouchableOpacity
                onPress={() => {
                  onChange(!value);
                  console.log('click', value);
                }}
                style={[
                  styles.checkboxBox,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor: value ? '#2090f3' : 'transparent',
                  },
                ]}
              />
            )}
          />
          <Text style={styles.checkboxText}>{t('signUp.agreedTerms')}</Text>
        </View>
        {errors.acceptTerms && (
          <Text style={styles.errorText}>{errors.acceptTerms.message}</Text>
        )}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.primaryButtonText}>{t('signUp.signUp')}</Text>
        </TouchableOpacity>

        <View style={styles.secondaryButtonsContainer}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              {t('signUp.withGoogle')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              {t('signUp.withFacebook')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signInTextContainer}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>{t('signUp.alreadyHave')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpScreen;
