import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  mainImage: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  contentWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  avatarLarge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d151c',
  },
  handle: {
    fontSize: 16,
    color: '#49779c',
  },
  description: {
    fontSize: 16,
    color: '#0d151c',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  iconText: {
    fontSize: 18,
    color: '#49779c',
  },
  iconCount: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#49779c',
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d151c',
    marginBottom: 8,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
  commentTextWrapper: {
    marginLeft: 12,
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  commentName: {
    fontWeight: 'bold',
    color: '#0d151c',
    marginRight: 8,
  },
  commentTime: {
    fontSize: 12,
    color: '#49779c',
  },
  commentText: {
    fontSize: 15,
    color: '#0d151c',
  },
  commentInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  commentInputWrapper: {
    marginLeft: 12,
    flex: 1,
    backgroundColor: '#e5e7eb',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  imageIcon: {
    marginLeft: 12,
  },
});
