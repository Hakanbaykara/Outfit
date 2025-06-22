import * as yup from 'yup';

export const getValidationSchema = (t: (key: string) => string) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t('signUp.errors.invalidEmail'))
      .required(t('signUp.errors.emailRequired')),
    password: yup
      .string()
      .min(6, t('signUp.errors.passwordMin'))
      .required(t('signUp.errors.passwordRequired')),
    acceptTerms: yup.bool().oneOf([true], t('signUp.errors.mustAccept')),
  });
