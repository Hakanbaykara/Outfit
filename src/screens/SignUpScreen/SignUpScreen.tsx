import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useTranslation} from 'react-i18next';

import styles from './styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir email girin')
    .required('Email gerekli'),
  password: yup.string().min(6, 'En az 6 karakter').required('Şifre gerekli'),
  acceptTerms: yup.bool().oneOf([true], 'Şartları kabul etmelisiniz'),
});

const SignUpScreen = () => {
  const {t} = useTranslation();

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
          <Text style={styles.input}>{errors.password.message}</Text>
        )}

        <View style={styles.checkboxRow}>
          <Controller
            control={control}
            name="acceptTerms"
            render={({field: {value, onChange}}) => (
              <TouchableOpacity
                onPress={() => onChange(!value)}
                style={
                  (styles.checkboxBox,
                  {
                    backgroundColor: value ? '#2090f3' : 'transparent',
                  })
                }
              />
            )}
          />
          <Text style={styles.checkboxText}>{t('signUp.agreedTerms')}</Text>
        </View>
        {errors.acceptTerms && (
          <Text style={styles.input}>{errors.acceptTerms.message}</Text>
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

      <View style={styles.signInTextContainer}>
        <Text style={styles.signInText}>{t('signUp.alreadyHave')}</Text>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
