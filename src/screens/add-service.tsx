import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 30,
          paddingBottom: 30
        }}
      >

        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Add Service
        </Text>

        {/* IMAGE PLACEHOLDER */}
        <View
          style={{
            width: "100%",
            height: 180,
            backgroundColor: "#f2f2f2",
            borderRadius: 10,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Select Image</Text>
        </View>

        {/* NAME */}
        <TextInput
          placeholder="Service name"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 12,
            marginTop: 20,
            borderRadius: 8
          }}
        />

        {/* DESCRIPTION */}
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 12,
            marginTop: 12,
            borderRadius: 8,
            height: 100
          }}
        />

        {/* PRICE */}
        <TextInput
          placeholder="Price (KES)"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 12,
            marginTop: 12,
            borderRadius: 8
          }}
        />

        {/* SALE */}
        <TextInput
          placeholder="Sale price (optional)"
          value={sale}
          onChangeText={setSale}
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 12,
            marginTop: 12,
            borderRadius: 8
          }}
        />

        {/* SAVE BUTTON */}
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            padding: 14,
            borderRadius: 10,
            marginTop: 20
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Save Service
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}