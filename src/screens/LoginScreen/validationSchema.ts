import * as yup from 'yup';

export const getLoginSchema = (t: (key: string) => string) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t('signIn.errors.invalidEmail'))
      .required(t('signIn.errors.requiredEmail')),
    password: yup
      .string()
      .min(6, t('signIn.errors.shortPassword'))
      .required(t('signIn.errors.requiredPassword')),
  });
