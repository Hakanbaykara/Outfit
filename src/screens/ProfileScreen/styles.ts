import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const spacing = 12; // Gap between columns
const numColumns = 3;
const itemWidth = (width - spacing * (numColumns + 1)) / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // bg-slate-50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 8,
    justifyContent: 'space-between',
  },
  settingsSVG: {
    right: 16,
  },
  headerTitle: {
    color: '#0D151C',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 24,
  },
  profileContainer: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#E7EEF4', // Placeholder color
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  profileName: {
    color: '#0D151C',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileBio: {
    color: '#49779C',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  profileLocation: {
    color: '#49779C',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  editProfileButton: {
    minWidth: 84,
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: '#E7EEF4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 480,
  },
  editProfileText: {
    color: '#0D151C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  statBox: {
    flex: 1,
    minWidth: 111,
    borderWidth: 1,
    borderColor: '#CEDDE8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  statValue: {
    color: '#0D151C',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#49779C',
    fontSize: 14,
    fontWeight: 'normal',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CEDDE8',
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#2094F3',
  },
  activeTabText: {
    color: '#0D151C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabText: {
    color: '#49779C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postGrid: {
    paddingTop: 8,
  },
  postRow: {
    justifyContent: 'space-between',
    marginBottom: spacing,
  },
  postContainer: {
    width: itemWidth,
    marginHorizontal: spacing / 2,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#E7EEF4',
  },
  bottomNav: {
    flexDirection: 'row',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#E7EEF4',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
  },
  bottomSpacer: {
    height: 20,
    backgroundColor: '#F8FAFC',
  },
});

export default styles;
