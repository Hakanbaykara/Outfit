import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    padding: 20,
  },
  titleMain: {
    margin: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    color: 'black',
  },
  mostRatedText: {
    marginTop: 45,
    alignItems: 'flex-start',
  },
  mostRatedTitle: {
    fontSize: 25,
    color: 'black',
  },
  mostRated: {
    alignSelf: 'center',
    borderWidth: 0.5,
    color: 'gary',
    marginTop: 20,
    width: '90%',
    height: 401,
  },
  mostRatedImage: {
    resizeMode: 'contain',
    height: 400,
    width: '100%',
  },
});
