import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const MostRated: React.FC = () => {
  return (
    <>
      <View id="Most Rated Title" style={styles.mostRatedText}>
        <Text id="Most Rated Text" style={styles.mostRatedTitle}>
          Most rated
        </Text>
      </View>
      <TouchableOpacity id="Most Rated View" style={styles.mostRated}>
        <Image
          source={require('@/assets/images/outfit_exp.jpg')}
          style={styles.mostRatedImage}
        />
      </TouchableOpacity>
    </>
  );
};

export default MostRated;
