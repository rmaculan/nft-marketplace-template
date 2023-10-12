import { View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, NFTData } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
      <HomeHeader />
    </SafeAreaView>
  );
};

export default Home;
