// src/components/ProfileScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Svg, Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ProfileStackParamList} from '@/types/app';
import styles from './styles';

interface Stat {
  value: string;
  label: string;
}

interface Post {
  id: string;
  imageUrl: string;
}

const ProfileScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  const [tabs, setTabs] = useState('outfits');

  const stats: Stat[] = [
    {value: '125', label: 'Posts'},
    {value: '350', label: 'Followers'},
    {value: '200', label: 'Following'},
  ];

  const posts: Post[] = [
    {
      id: '1',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0H31UDtS_AX2RWKKlKf9Pog8oK97XPP5Iizbwl9SGBIN3Mp-20gv1LuzqkB7qAXTtFmPlDR40RpOa09blZGLrRw-4MNkyL02AdsFKRzXGVQj8hO8L6oX8y2bpJTfR5hoCZOQvUYJC0Ort1Q1VNgU6n60dLYh2obiSkYpqDiot4-OlSu8N6v84eofhF0Y_ioegRL12PpBNcVpeHAFP8Vz4sW83jYnz89l-7A9QOibndscszWW3zcAgbH4s0VSk1oGK5YVQxGK_TFgE',
    },
    {
      id: '2',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_zRde8nLhk1h6bo5yHKXaO-Axmz8yVDjv4NNvyTAWd9B9Kl8iMKlPpFB0db9qGli7IdKemByx5YztxXBJQfIWwmKUm4POSpbloIQ-xskyAVkx-gPq1z9a7Qc5pe-z3zkbc7Mkl8_JzNUnTGcYq1L3a8RRLlX6qHGki9-Zh1rEKLqFwbp3COyy3R8CkV3GjGnkRuiZkliQ8mVGsqL-hs3ytIRwM-irr2gbulYuJCEcUxAzRguN_aJA0Y0Hgn3lIAqYP5YdKGOuFNC',
    },
    {
      id: '3',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2lSUnW9SdtdPiGrgMQtHuWrCMBfzyn71mxRDaLwfyN5Byd0X7R-V3cZQgWgaPnrcR3uwQ5HbZHo6DAltc52vVT-mLduolIcgWzhpF7hCs9cfx8WcBvD3W79uhuxuqX9mU_q6WtvbIn-ia-SpPlblqjfCCRxLhvK5q_LKkURKot_kAP4_dOxJkY3vXj5lBm6NrpF_RXpHrs8CR91cz0E173EwQWSU4KMAmthWv5Npz03K-hxJqpjfH4dnxH-1OFwLdcYuw2p8g4PkX',
    },
    {
      id: '4',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuArjxYEM0YWO-oAQYrE7TArwASUy9pgwwXh_G4p2oI7FJzpokVBI19zrkDXgOxkjU-SSLm3xQY9i3jSDZXVyq4NzP2neg_mHzt3RoYd-4PsURVrPhbKGcNTkjUQXjpifnXyAGQQsMLx1RtQirs3OQ6qWheQ1tcDEvcAV2JNSsgSaPrNSXlPxY9uJzLNE_AaDkJD5h1URhzpDlVRafiUJqo4MqRNA2f7E9jNMp9yJZfQ2ZXDnrOxMb0wJiRvf7JzCV12LowBy-sgNzzL',
    },
    {
      id: '5',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4JjTSA61F_fxHBSyjaNzQE_8Z3JSyICSmb7o1lLHBAQwJJ6_xkkmiWTh2__ek2dekeMMbXUws45DKin_4wlcshrKG5PvoG5_G23AgINoq5O8JwOE8LqrN8iQTpokHOte8rbBVDXqK89q8ZZRYb1u8-RV_FXvnnpfS-9lqT9zVwJSctiqul4MPc3TFp1Cy03bwEBE_D1qhM2DwZDVufbjZ0lFNfulrZktXfL0wpkkNgRhiHxIQN6727-ZfeKhIIgi210alRw1HA0SZ',
    },
    {
      id: '6',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAN8VvVniQA_B0U2NyGZT-jnZxBm5I6t__RE6JVgdl0HyyG7QvlUz9cZkAkKD8KItQkrSQyiPlBcuvtJx4zjpkKaHILgS8Wq16BUlgnQO02ewscDGbs_dZ2rTMhUcsUHFqF6eToX_PW6ppRNb-kIaNzkw_zz3OwyHE2Y9cy8-m1gpqCKYn5AWIHtN2u42hA8DxGQlXvE8Xo6P6WipBwwn1DzvWfgZUlemnGR2HPn4NAoWOMSF8iD-zkyvKKzCgoucMn4gJ5OUqquIZa',
    },
    {
      id: '7',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBvtVyYC37oeu__xovlEvCp_VVpdrJTfqcuXnhkOy5zzlmKd8O-6lvRP0kFT9FOMNiHRRfSORJ6g8rM31T_it4JC3KKhrrps31CEHB0WbSfCKFU5W4DnEKZ7r7v0UwgcD0m5ZmVeRxOpOy8FtpMhgZRzcd_i6uRtc1SA1Oi8PE7-Nk0qBlt1xqIwu_xvJcS-KDjByjUC1-FXqqxsTOc2lDtmYAomEkGdFUoDnjjxzdgMJRkuUxImjIWm9vnrSlSLLyXrXJ3KfxhbjLo',
    },
    {
      id: '8',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCioNWw4fmz9JFFa9nAmrr6uUFWEMSq93ICKfBWWTV-tZutPEnD8t4IhwAPtkuIrOYbzM0ScIL9oxAuk-1x85c-aRLezFzFPbFIEgq5UFpOmmWoosxJ6NDgkY_-To8_JuzMJaZ4FvCdzDv9EM6dZUC80IjK3tZLcp57YvimmDV_T8sL-48EgFXI6rlwn02PTAK6-QIpkWEbUO2-h8qAIB8fLJs2ooVTUWrSm1chDybetkHdO1viBGRP-RV6JDuOMKfmL4rB6eEkLguB',
    },
    {
      id: '9',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCHSMyiCHXv3J1yd6wCEe13ZCXv3t5JWa7uSPrs7NLOqC9aKoZbirZC6jnXm6lbBPIVWsZeaNPcGOQDIEnVUlxvlX3KPqpPF1lOpVizUzxgIh2cD6EH1LXMuqzp9fnNBxYcGBeqPtflFgLKAzf2rh8bAdd4y09OdZPJrKnHDAtwgypfHjhni5BrEtgCLva8K78iC6pZ_WP6pQ6F-NULu18IGwRNY9H7ADMjugr-C0p4BWHzd8kVp4SLAPwJdY7boQAjsmYzREaP-XJh',
    },
  ];

  const renderPost = ({item}: {item: Post}) => (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() =>
        navigation.navigate('PostDetail', {
          postId: item.id,
          imageUrl: item.imageUrl,
        })
      }>
      <Image source={{uri: item.imageUrl}} style={styles.postImage} />
    </TouchableOpacity>
  );

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Svg
              width={24}
              height={24}
              fill="#0D151C"
              viewBox="0 0 256 256"
              style={styles.settingsSVG}>
              <Path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrEq7cR1pso8KX9DRPoGVWJxrVuIA_dRaN-icl7kQcWqFGDjUcjtH99qDWbGtcRi_ZjucfZ98BO5n76YDSObPpnbskd2NAPkdUsuUtN79-LGkq-x0-v_esgrU9N8eti1Fvm073USRIC00968p2kwEY7joe5qJjc3SD005heEu6tN9xQa9oe4kpQAyrcy5JA23tLOLhSdeusHc84Q7ubhyRS_WEmThFCO3kXKcIlzpBxxvsK1N3cxsWkKm2joD9ixc0WUWf9irDNpBj',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sophia Carter</Text>
            <Text style={styles.profileBio}>
              Fashion enthusiast | Sharing my daily style
            </Text>
            <Text style={styles.profileLocation}>Los Angeles, CA</Text>
          </View>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statBox}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            onPress={() => setTabs('outfits')}
            style={[styles.tab, tabs === 'outfits' && styles.activeTab]}>
            <Text style={styles.activeTabText}>Outfits</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTabs('saved')}
            style={[styles.tab, tabs === 'saved' && styles.activeTab]}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.postRow}
          contentContainerStyle={styles.postGrid}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
