import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Services() {

  const [services, setServices] = useState([
    {
      id: "1",
      name: "Acrylic Full Set",
      image: "https://via.placeholder.com/200",
      description: "Long lasting acrylic nails with custom shaping",
      price: 2500,
      sale: 2000
    },
    {
      id: "2",
      name: "Gel Polish",
      image: "https://via.placeholder.com/200",
      description: "Glossy gel finish with long wear",
      price: 1500,
      sale: null
    }
  ]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <ScrollView
        contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 30,
        paddingBottom: 30
        }}
    >

      <Text
        style={{
          fontSize: 22,
          fontWeight: "600"
        }}
      >
        My Services
      </Text>


      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#000",
          padding: 14,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center"
          }}
        >
          + Add Service
        </Text>
      </TouchableOpacity>


      {services.map((service) => (
  <View
    key={service.id}
    style={{
      marginTop: 20,
      borderWidth: 1,
      borderColor: "#eee",
      borderRadius: 12,
      padding: 12
    }}
  >
    <Image
      source={{
        uri: service.image
      }}
      style={{
        width: "100%",
        height: 160,
        borderRadius: 10
      }}
    />

    <Text
      style={{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
      }}
    >
      {service.name}
    </Text>

    <Text>
      {service.description}
    </Text>

    <Text style={{ marginTop: 8 }}>
      Price: KES {service.price}
    </Text>

    {service.sale && (
      <Text>
        Sale Price: KES {service.sale}
      </Text>
    )}

    <View
      style={{
        flexDirection: "row",
        marginTop: 12
      }}
    >
      <TouchableOpacity style={{ marginRight: 20 }}>
        <Text>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>

  </View>
))}
    </ScrollView>

    </SafeAreaView>
  );
}