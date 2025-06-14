import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const maxWidth = Math.min(width, 480); // Max width as per HTML

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // bg-slate-50
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    color: '#0D151C',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  headerSpacer: {
    width: 24, // Match close icon width for centering
  },
  scrollContent: {
    padding: 16,
    flexGrow: 1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    width: '100%',
    maxWidth: maxWidth,
    marginBottom: 12,
  },
  captionInput: {
    backgroundColor: '#E7EEF4', // bg-[#e7eef4]
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#0D151C',
    minHeight: 144, // min-h-36
    textAlignVertical: 'top',
  },
  tagsInput: {
    backgroundColor: '#E7EEF4',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#0D151C',
    height: 56, // h-14
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
  },
  shareButton: {
    backgroundColor: '#2094F3', // bg-[#2094f3]
    borderRadius: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    maxWidth: maxWidth,
  },
  shareButtonText: {
    color: '#FFFFFF', // text-slate-50
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
