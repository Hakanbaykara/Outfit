import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '@/types/app';

// import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '@/redux/store';
import {useAppSelector} from '@/redux/store';
import {increment} from '@/redux/reducers/outfit';

import styles from './styles';

const POSTS = [
  {
    id: '1',
    name: 'Liam Carter',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfEChEg7Mdvm_nun6aqo9AnjkztlJkRoeZjynHRPLdCifbWOpPEX_p6xOteJmDfKUw4aXyx1YexcDvZ_4RA7zfVkcoTODKtiFzglAvdfkaF2QZRrtKOU79x2ag4Hau1X0vyAJiTdy72uuuutrL8rqCSKFfLtssNPi_hUhR_JyNGGaLCsxb96RiI2uHhTXSopzWt4Thtfh7htpRRXYua0r-TT_LeQFyFEQ2BuZJgoEEwBNUFHRgs_avThisypIt7Izgk5RbeN3Cnag2',
    time: '2d',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1abjdvETJvei8Pj2RSbg_JUdLBJhS9ApZ3PyAvUHup-n9k4EEBWvM9MARCcu2-EiaWJeC_4qCq8vuteTQrFXHoAGE5BwEAExgnll5wyZmrip_bekyZkC16zXUKKyip96BQMucncJewgbKpiKaxon9cyaAaPdnK-ekDkPUWiN7N3eBu9Qac3asDfipGOb3I0H8rXUDaa5EEgJYnKfCVtWfUV7hQIYIijiaaRHGUxu51is5-vPSQ7xRCsy2tYfah5Ku2bVIDPyUU0ug',
    likes: 23,
    comments: 5,
    shares: 1,
    caption: 'Casual Friday look',
  },
  {
    id: '2',
    name: 'Ethan Harper',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDt2OtRb92tpswGITyRDWWsWXIAotNrw0zbK2qdkLirY61LysAJhWLx4crOBqAzqdCPAN4cdpfQn9kXKCZPiSTkjrhn2cJ32be8y3F2lcwkNysLwbFU9b0Ah8PVM8dGVjlpkyXv6AI85cROejoiDKhMMb4HauI7Fjb1ijjuRz1cUAZp3NKSCToM5r8gD3Wkfd3Yp_84kn2o95SoEavbKoU7gza2sHVLLpKc3oIbjjxLWXo7uSbZvhnqQCRFK0OOrYAtb4W6t8YFgejA',
    time: '3d',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfmYYk2pr7w9nDlswVoxnZocnKnU63ChwUckSh694oWmg1-8mAB2br5FZWn422BvFkReH_2vWXinbNjiPodguRFnFb9FoDyQ54xYpZ8mJMyH_eMTqgmwF3eRNo5Ov4MN0V0ncchdPERAfiaDHbDlGbW1sv4t__vdGGyHhb6DZs_RUiSFtxDoXXWjItjXw0G9LMlb2Ox_wUvakpd9ywSr15Juz0hzDHEboZ2zV52YzhsORSzEkgiMmeBXnXhr8dayjlwyeswM0nSJ8',
    likes: 15,
    comments: 2,
    shares: 0,
    caption: 'Street style',
  },
  {
    id: '3',
    name: 'Noah Bennett',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTkowmxKaBGjs6rNlTmVR3gtT9h8j5Ud51EfymGdScpeXCCGDy2Bqetw2caPUl3LfACLOhjyhT8PYgHyeyMP91pr60Gf8mI-SxV9waoohgo7uAjVG2pQCOOAH-A8rqIb3jem1dHgIT3JuAZN1pgxOw2G70dngf0PJ4mNb1NoqvRdNphom0N_JUoXgvd3Xgecg8oMzzNHjcu7hGwS3N-0GiwZThiRoK-a2fzTt3gIDHjd08EwGyvUBGX3ML-oW5UZmFoBC49DOAxs3l',
    time: '3d',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSc6MXpglyqqB_LPFoXOVfdW7QIZPF0Sp_4C75qbC_23xkMb_8y4Z4N0JVMEDkbNYHPPd43C0SrqmXTOcUHfYjKQCOwLoMXbUp8Gi3AtKvDqJFm36Ls9TDJ4lWgV18R2Kt6HxdvH17IHKY-Cxcy7MBYlcYJ41F8n5ffuvqBjhe6fMYTeXjZ54avtID7VqUg6SAMO8POCI0wOuEy19rDYjEw9b6g9QHtSjRIWmPkiwfhZrPILzW8E0M93eelg1xidlRjs1WVOTWhtpI',
    likes: 30,
    comments: 8,
    shares: 3,
    caption: 'Summer vibes',
  },
  // ... other posts
];

const HomeScreen: React.FC = () => {
  // const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.outfit.value);
  const [search, setSearch] = useState('');

  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.safeArea, {paddingTop: insets.top}]}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#49779c"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={POSTS.filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase()),
        )}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.postContainer}
            onPress={() =>
              navigation.navigate('PostDetail', {
                postId: item.id,
                imageUrl: item.image,
              })
            }>
            <View style={styles.userInfo}>
              <Image source={{uri: item.avatar}} style={styles.avatar} />
              <View style={styles.userTextInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userTime}>{item.time}</Text>
              </View>
            </View>
            <Image
              source={{uri: item.image}}
              style={styles.postImage}
              resizeMode="cover"
            />
            <View style={styles.interactions}>
              <TouchableOpacity
                onPress={() => dispatch(increment())}
                style={styles.interactionButton}>
                <Text style={styles.interactionIcon}>❤️</Text>
                <Text style={styles.interactionCount}>{counter}</Text>
                {/* use item.likes */}
              </TouchableOpacity>
              <View style={styles.interactionButton}>
                <Text style={styles.interactionIcon}>💬</Text>
                <Text style={styles.interactionCount}>{item.comments}</Text>
              </View>
              <View style={styles.interactionButton}>
                <Text style={styles.interactionIcon}>✈️</Text>
                <Text style={styles.interactionCount}>{item.shares}</Text>
              </View>
            </View>
            <Text style={styles.caption}>{item.caption}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
