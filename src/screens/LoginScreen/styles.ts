import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0d151c',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 12,
  },
  input: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#e7eef4',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#0d151c',
  },
  error: {
    color: '#e00',
    fontSize: 12,
    marginTop: 4,
  },
  forgotText: {
    textAlign: 'right',
    color: '#49769c',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
  socialButton: {
    backgroundColor: '#e7eef4',
    height: 44,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#0d151c',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#2090f3',
    height: 48,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
