import React from 'react';
import {View, TextInput, FlatList, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Post {
  id: string;
  imageUrl: string;
}

const data: Post[] = [
  {
    id: '1',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1abjdvETJvei8Pj2RSbg_JUdLBJhS9ApZ3PyAvUHup-n9k4EEBWvM9MARCcu2-EiaWJeC_4qCq8vuteTQrFXHoAGE5BwEAExgnll5wyZmrip_bekyZkC16zXUKKyip96BQMucncJewgbKpiKaxon9cyaAaPdnK-ekDkPUWiN7N3eBu9Qac3asDfipGOb3I0H8rXUDaa5EEgJYnKfCVtWfUV7hQIYIijiaaRHGUxu51is5-vPSQ7xRCsy2tYfah5Ku2bVIDPyUU0ug',
  },
  {
    id: '2',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfmYYk2pr7w9nDlswVoxnZocnKnU63ChwUckSh694oWmg1-8mAB2br5FZWn422BvFkReH_2vWXinbNjiPodguRFnFb9FoDyQ54xYpZ8mJMyH_eMTqgmwF3eRNo5Ov4MN0V0ncchdPERAfiaDHbDlGbW1sv4t__vdGGyHhb6DZs_RUiSFtxDoXXWjItjXw0G9LMlb2Ox_wUvakpd9ywSr15Juz0hzDHEboZ2zV52YzhsORSzEkgiMmeBXnXhr8dayjlwyeswM0nSJ8',
  },
  {
    id: '3',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSc6MXpglyqqB_LPFoXOVfdW7QIZPF0Sp_4C75qbC_23xkMb_8y4Z4N0JVMEDkbNYHPPd43C0SrqmXTOcUHfYjKQCOwLoMXbUp8Gi3AtKvDqJFm36Ls9TDJ4lWgV18R2Kt6HxdvH17IHKY-Cxcy7MBYlcYJ41F8n5ffuvqBjhe6fMYTeXjZ54avtID7VqUg6SAMO8POCI0wOuEy19rDYjEw9b6g9QHtSjRIWmPkiwfhZrPILzW8E0M93eelg1xidlRjs1WVOTWhtpI',
  },
  {
    id: '4',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1abjdvETJvei8Pj2RSbg_JUdLBJhS9ApZ3PyAvUHup-n9k4EEBWvM9MARCcu2-EiaWJeC_4qCq8vuteTQrFXHoAGE5BwEAExgnll5wyZmrip_bekyZkC16zXUKKyip96BQMucncJewgbKpiKaxon9cyaAaPdnK-ekDkPUWiN7N3eBu9Qac3asDfipGOb3I0H8rXUDaa5EEgJYnKfCVtWfUV7hQIYIijiaaRHGUxu51is5-vPSQ7xRCsy2tYfah5Ku2bVIDPyUU0ug',
  },
  {
    id: '5',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfmYYk2pr7w9nDlswVoxnZocnKnU63ChwUckSh694oWmg1-8mAB2br5FZWn422BvFkReH_2vWXinbNjiPodguRFnFb9FoDyQ54xYpZ8mJMyH_eMTqgmwF3eRNo5Ov4MN0V0ncchdPERAfiaDHbDlGbW1sv4t__vdGGyHhb6DZs_RUiSFtxDoXXWjItjXw0G9LMlb2Ox_wUvakpd9ywSr15Juz0hzDHEboZ2zV52YzhsORSzEkgiMmeBXnXhr8dayjlwyeswM0nSJ8',
  },
  {
    id: '6',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSc6MXpglyqqB_LPFoXOVfdW7QIZPF0Sp_4C75qbC_23xkMb_8y4Z4N0JVMEDkbNYHPPd43C0SrqmXTOcUHfYjKQCOwLoMXbUp8Gi3AtKvDqJFm36Ls9TDJ4lWgV18R2Kt6HxdvH17IHKY-Cxcy7MBYlcYJ41F8n5ffuvqBjhe6fMYTeXjZ54avtID7VqUg6SAMO8POCI0wOuEy19rDYjEw9b6g9QHtSjRIWmPkiwfhZrPILzW8E0M93eelg1xidlRjs1WVOTWhtpI',
  },
  {
    id: '7',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1abjdvETJvei8Pj2RSbg_JUdLBJhS9ApZ3PyAvUHup-n9k4EEBWvM9MARCcu2-EiaWJeC_4qCq8vuteTQrFXHoAGE5BwEAExgnll5wyZmrip_bekyZkC16zXUKKyip96BQMucncJewgbKpiKaxon9cyaAaPdnK-ekDkPUWiN7N3eBu9Qac3asDfipGOb3I0H8rXUDaa5EEgJYnKfCVtWfUV7hQIYIijiaaRHGUxu51is5-vPSQ7xRCsy2tYfah5Ku2bVIDPyUU0ug',
  },
  {
    id: '8',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfmYYk2pr7w9nDlswVoxnZocnKnU63ChwUckSh694oWmg1-8mAB2br5FZWn422BvFkReH_2vWXinbNjiPodguRFnFb9FoDyQ54xYpZ8mJMyH_eMTqgmwF3eRNo5Ov4MN0V0ncchdPERAfiaDHbDlGbW1sv4t__vdGGyHhb6DZs_RUiSFtxDoXXWjItjXw0G9LMlb2Ox_wUvakpd9ywSr15Juz0hzDHEboZ2zV52YzhsORSzEkgiMmeBXnXhr8dayjlwyeswM0nSJ8',
  },
  {
    id: '9',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSc6MXpglyqqB_LPFoXOVfdW7QIZPF0Sp_4C75qbC_23xkMb_8y4Z4N0JVMEDkbNYHPPd43C0SrqmXTOcUHfYjKQCOwLoMXbUp8Gi3AtKvDqJFm36Ls9TDJ4lWgV18R2Kt6HxdvH17IHKY-Cxcy7MBYlcYJ41F8n5ffuvqBjhe6fMYTeXjZ54avtID7VqUg6SAMO8POCI0wOuEy19rDYjEw9b6g9QHtSjRIWmPkiwfhZrPILzW8E0M93eelg1xidlRjs1WVOTWhtpI',
  },
  {
    id: '10',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSc6MXpglyqqB_LPFoXOVfdW7QIZPF0Sp_4C75qbC_23xkMb_8y4Z4N0JVMEDkbNYHPPd43C0SrqmXTOcUHfYjKQCOwLoMXbUp8Gi3AtKvDqJFm36Ls9TDJ4lWgV18R2Kt6HxdvH17IHKY-Cxcy7MBYlcYJ41F8n5ffuvqBjhe6fMYTeXjZ54avtID7VqUg6SAMO8POCI0wOuEy19rDYjEw9b6g9QHtSjRIWmPkiwfhZrPILzW8E0M93eelg1xidlRjs1WVOTWhtpI',
  },
  {
    id: '11',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1abjdvETJvei8Pj2RSbg_JUdLBJhS9ApZ3PyAvUHup-n9k4EEBWvM9MARCcu2-EiaWJeC_4qCq8vuteTQrFXHoAGE5BwEAExgnll5wyZmrip_bekyZkC16zXUKKyip96BQMucncJewgbKpiKaxon9cyaAaPdnK-ekDkPUWiN7N3eBu9Qac3asDfipGOb3I0H8rXUDaa5EEgJYnKfCVtWfUV7hQIYIijiaaRHGUxu51is5-vPSQ7xRCsy2tYfah5Ku2bVIDPyUU0ug',
  },
  {
    id: '12',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1abjdvETJvei8Pj2RSbg_JUdLBJhS9ApZ3PyAvUHup-n9k4EEBWvM9MARCcu2-EiaWJeC_4qCq8vuteTQrFXHoAGE5BwEAExgnll5wyZmrip_bekyZkC16zXUKKyip96BQMucncJewgbKpiKaxon9cyaAaPdnK-ekDkPUWiN7N3eBu9Qac3asDfipGOb3I0H8rXUDaa5EEgJYnKfCVtWfUV7hQIYIijiaaRHGUxu51is5-vPSQ7xRCsy2tYfah5Ku2bVIDPyUU0ug',
  },
  {
    id: '13',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfmYYk2pr7w9nDlswVoxnZocnKnU63ChwUckSh694oWmg1-8mAB2br5FZWn422BvFkReH_2vWXinbNjiPodguRFnFb9FoDyQ54xYpZ8mJMyH_eMTqgmwF3eRNo5Ov4MN0V0ncchdPERAfiaDHbDlGbW1sv4t__vdGGyHhb6DZs_RUiSFtxDoXXWjItjXw0G9LMlb2Ox_wUvakpd9ywSr15Juz0hzDHEboZ2zV52YzhsORSzEkgiMmeBXnXhr8dayjlwyeswM0nSJ8',
  },
  {
    id: '14',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSc6MXpglyqqB_LPFoXOVfdW7QIZPF0Sp_4C75qbC_23xkMb_8y4Z4N0JVMEDkbNYHPPd43C0SrqmXTOcUHfYjKQCOwLoMXbUp8Gi3AtKvDqJFm36Ls9TDJ4lWgV18R2Kt6HxdvH17IHKY-Cxcy7MBYlcYJ41F8n5ffuvqBjhe6fMYTeXjZ54avtID7VqUg6SAMO8POCI0wOuEy19rDYjEw9b6g9QHtSjRIWmPkiwfhZrPILzW8E0M93eelg1xidlRjs1WVOTWhtpI',
  },
];

const SearchScreen = () => {
  const renderItem = ({item}: {item: Post}) => (
    <Image id={item.id} source={{uri: item.imageUrl}} style={styles.image} />
  );

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#49769c"
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
