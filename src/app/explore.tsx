import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";

export default function Bookings() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Choose Booking Date</Text>

      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#000"
          }
        }}
      />

      <Text style={styles.selected}>
        Selected: {selectedDate || "None"}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Available Time Slots</Text>

        <View style={styles.times}>
          {["09:00", "11:00", "13:00", "15:00"].map((time) => (
            <TouchableOpacity key={time} style={styles.timeBtn}>
              <Text>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookText}>Confirm Booking</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12
  },
  selected: {
    marginTop: 12,
    fontSize: 16
  },
  card: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10
  },
  times: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  timeBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8
  },
  bookBtn: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 10,
    alignItems: "center"
  },
  bookText: {
    color: "#fff",
    fontWeight: "600"
  }
});