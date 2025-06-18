import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 16,
    paddingBottom: 8,
    justifyContent: 'space-between',
  },
  backIconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d151c',
    paddingRight: 48,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: 480,
    gap: 16,
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#e7eef4',
    fontSize: 16,
    color: '#0d151c',
  },
  errorText: {
    color: 'red',
    marginLeft: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  checkboxBox: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderColor: '#cedce8',
    borderWidth: 2,
  },
  checkboxText: {
    fontSize: 16,
    color: '#0d151c',
  },
  primaryButton: {
    height: 48,
    borderRadius: 999,
    backgroundColor: '#2090f3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  primaryButtonText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButtonsContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    gap: 12,
  },
  secondaryButton: {
    height: 40,
    borderRadius: 999,
    backgroundColor: '#e7eef4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  secondaryButtonText: {
    color: '#0d151c',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signInTextContainer: {
    marginBottom: 20,
  },
  signInText: {
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#49769c',
    textDecorationLine: 'underline',
  },
});

export default styles;
