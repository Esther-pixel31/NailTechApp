import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: "1", name: "Hair", icon: "💇" },
  { id: "2", name: "Lashes", icon: "👁️" },
  { id: "3", name: "Makeup", icon: "💄" },
  { id: "4", name: "Massage", icon: "💆" },
  { id: "5", name: "Nails", icon: "💅" }
];

const professionals = [
  {
    id: "1",
    name: "Lena Nails",
    rating: 4.8,
    location: "Nairobi",
    profession: "Nails"
  },
  {
    id: "2",
    name: "Glow Studio",
    rating: 4.6,
    location: "Westlands",
    profession: "Makeup"
  }
];

const offers = [
  {
    id: "1",
    title: "20% off Acrylic Nails",
    name: "Lena Nails"
  },
  {
    id: "2",
    title: "Free lashes refill",
    name: "Glow Studio"
  }
];

export default function Home() {
  return (
    
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 30,
        paddingBottom: 30
      }}
    >
     <SafeAreaView style={{ flex: 3 }}> 
  

      {/* GREETING */}
      <Text style={{ fontSize: 18, marginTop: 12 }}>
        Hi, User
      </Text>

      <Text style={{ fontSize: 22, marginTop: 8, fontWeight: "600" }}>
        Find Your Beauty Professional
      </Text>

      {/* SEARCH */}
      <TextInput
        placeholder="Search services or professionals"
        style={{
          marginTop: 12,
          padding: 12,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 8
        }}
      />

      {/* CATEGORIES */}
      <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "600" }}>
        Categories
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <View
            key={item.id}
            style={{
              padding: 12,
              marginRight: 10,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 22 }}>{item.icon}</Text>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      </SafeAreaView>

      {/* FEATURED */}
      <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "600" }}>
        Featured Professionals
      </Text>

      <FlatList
        horizontal
        data={professionals}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              width: 180,
              marginRight: 12,
              borderWidth: 1,
              borderColor: "#eee",
              borderRadius: 10,
              padding: 10
            }}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/100" }}
              style={{ width: "100%", height: 100, borderRadius: 10 }}
            />

            <Text style={{ fontWeight: "600", marginTop: 8 }}>
              {item.name}
            </Text>

            <Text>⭐ {item.rating}</Text>
            <Text>{item.location}</Text>
            <Text>{item.profession}</Text>
          </View>
        )}
      />

      {/* OFFERS (HORIZONTAL) */}
      <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "600" }}>
        Offers
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {offers.map((item) => (
          <View
            key={item.id}
            style={{
              width: 200,
              padding: 12,
              borderWidth: 1,
              borderColor: "#eee",
              borderRadius: 10,
              marginRight: 10
            }}
          >
            <Text style={{ fontWeight: "600" }}>
              {item.title}
            </Text>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}