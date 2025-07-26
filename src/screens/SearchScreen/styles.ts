import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const spacing = 12;
const imageSize = (width - spacing * 4) / 3; // 3 items per row with outer & inner spacing

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  searchContainer: {
    paddingHorizontal: spacing,
    paddingVertical: spacing,
  },
  input: {
    backgroundColor: '#e7eef4',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    color: '#0d151c',
    fontSize: 16,
  },
  gridContainer: {
    paddingHorizontal: spacing,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: spacing,
  },
  image: {
    width: imageSize,
    height: (imageSize * 4) / 3, // aspect ratio 3:4
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
});
