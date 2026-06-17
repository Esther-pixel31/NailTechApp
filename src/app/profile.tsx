import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export default function Profile() {
  const [mode, setMode] = useState("client");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>

      <Text style={{ fontSize: 22, fontWeight: "600" }}>
        Profile
      </Text>

      {/* MODE SWITCH */}
      <View style={{ flexDirection: "row", marginTop: 12 }}>
        <TouchableOpacity
          onPress={() => setMode("client")}
          style={{
            padding: 10,
            borderBottomWidth: mode === "client" ? 2 : 0,
            marginRight: 20
          }}
        >
          <Text>Client</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMode("tech")}
          style={{
            padding: 10,
            borderBottomWidth: mode === "tech" ? 2 : 0
          }}
        >
          <Text>Nail Tech</Text>
        </TouchableOpacity>
      </View>

      {/* HEADER */}
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={{ width: 90, height: 90, borderRadius: 45 }}
        />

        <Text style={{ fontSize: 18, marginTop: 10 }}>
          {mode === "client" ? "Client Name" : "Business Name"}
        </Text>

        <Text style={{ color: "#666" }}>
          {mode === "client"
            ? "Beauty Lover"
            : "Nail Tech Business"}
        </Text>
      </View>

      {/* CLIENT VIEW */}
      {mode === "client" && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "600" }}>Your Bookings</Text>

          <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", marginTop: 10 }}>
            <Text>Nails appointment - Lena Nails</Text>
            <Text>12 June 10:00 AM</Text>
          </View>
        </View>
      )}

      {/* TECH VIEW */}
      {mode === "tech" && (
        <View style={{ marginTop: 20 }}>

          {/* BASIC INFO */}
          <Text style={{ fontWeight: "600" }}>Business Info</Text>

          <TextInput placeholder="Business name" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />
          <TextInput placeholder="Location" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />
          <TextInput placeholder="Phone number (verified)" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />

          {/* SOCIAL LINKS */}
          <Text style={{ fontWeight: "600", marginTop: 20 }}>Social Media</Text>

          <TextInput placeholder="WhatsApp" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />
          <TextInput placeholder="Instagram" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />
          <TextInput placeholder="TikTok" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />
          <TextInput placeholder="Facebook" style={{ borderWidth: 1, borderColor: "#ddd", padding: 10, marginTop: 10 }} />

          {/* SERVICES */}
          <Text style={{ fontWeight: "600", marginTop: 20 }}>Services</Text>

          <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", marginTop: 10 }}>
            <Text>Acrylic Nails - $25</Text>
            <Text>Includes shaping and polish</Text>
          </View>

          <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", marginTop: 10 }}>
            <Text>Gel Nails - $20</Text>
            <Text>Long lasting finish</Text>
          </View>

          {/* PROMOTIONS */}
          <Text style={{ fontWeight: "600", marginTop: 20 }}>Promotions</Text>

          <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", marginTop: 10 }}>
            <Text>No active promotions</Text>
          </View>

          {/* SUMMARY */}
          <Text style={{ fontWeight: "600", marginTop: 20 }}>Summary</Text>

          <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", marginTop: 10 }}>
            <Text>5 services listed</Text>
            <Text>2 active promotions</Text>
            <Text>Verified phone pending</Text>
          </View>
        <Text style={{ fontWeight: "600", marginTop: 20 }}>Earnings</Text>
            
        {/* EARNING SUMMARY */}
            <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", marginTop: 10 }}>
                <Text>Total this month: KES 32,000</Text>
                <Text>Bookings completed: 18</Text>
                <Text>Average per client: KES 1,800</Text>
            </View>
        </View>
      )}

    </ScrollView>
  );
}