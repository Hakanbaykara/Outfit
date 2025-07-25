import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D151C',
  },
  rightView: {
    width: 24,
  },
  listContainer: {
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#e9edf1',
  },
  itemText: {
    fontSize: 16,
    color: '#0D151C',
  },
  signOutContainer: {
    padding: 16,
  },
  signOutButton: {
    backgroundColor: '#e9edf1',
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: 'center',
  },
  signOutText: {
    color: '#0D151C',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
