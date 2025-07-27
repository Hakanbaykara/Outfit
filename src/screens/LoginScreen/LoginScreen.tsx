import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '@/redux/store';
// import {CommonActions, useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '@/types/app';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {getLoginSchema} from './validationSchema';

import {login} from '@/redux/services/auth';
import {getToken} from '@/utils/authStorage';
import styles from './styles';
import {setIsToken} from '@/redux/reducers/account';

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const schema = getLoginSchema(t);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data: {email: string; password: string}) => {
    try {
      await login(data);

      const token = await getToken();
      if (token) {
        dispatch(setIsToken(true));
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const onSubmit = (data: FormValues) => {
    handleLogin(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signIn.welcomeBack')}</Text>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.input}
              placeholder={t('signIn.email')}
              placeholderTextColor="#49769c"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.input}
              placeholder={t('signIn.password')}
              placeholderTextColor="#49769c"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>{t('signIn.forgotPassword')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>
          {t('signIn.signInWithGoogle')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>
          {t('signIn.signInWithApple')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>{t('signIn.signIn')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
