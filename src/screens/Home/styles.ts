import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f1f5f9',
  },
  searchInput: {
    backgroundColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#0d151c',
  },
  scrollView: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userTextInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0d151c',
  },
  userTime: {
    fontSize: 13,
    color: '#64748b',
  },
  postImage: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginVertical: 12,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  interactionIcon: {
    fontSize: 18,
    color: '#49779c',
  },
  interactionCount: {
    fontSize: 14,
    marginLeft: 6,
    color: '#49779c',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 15,
    color: '#0d151c',
    marginTop: 6,
  },
});
