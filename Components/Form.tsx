import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import { gender } from "../utils/types/gender";
import { session, year } from "../utils/types/session";
import { rank } from "../utils/types/rank";

const Form = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedRank, setSelectedRank] = useState<string | null>(null);
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = () => {
    navigation.navigate("Result");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.labelText}>Selection of gender: </Text>

        <Dropdown
          style={[styles.dropdown]}
          labelField="label"
          valueField="value"
          placeholder="Gender"
          placeholderStyle={styles.placeholder}
          data={gender}
          value={selectedGender}
          onChange={(item) => setSelectedGender(item.value)}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.dropdownRowContainer}>
          <Text style={styles.labelText}>Selection of session: </Text>
          <Dropdown
            style={[styles.dropdown]}
            labelField="label"
            valueField="value"
            placeholder="Session"
            placeholderStyle={styles.placeholder}
            data={session}
            value={selectedSession}
            onChange={(item) => setSelectedSession(item.value)}
          />
        </View>
        <View style={styles.dropdownRowContainer}>
          <Dropdown
            style={[styles.dropdown]}
            labelField="label"
            valueField="value"
            placeholder="Year"
            placeholderStyle={styles.placeholder}
            data={year}
            value={selectedYear}
            onChange={(item) => setSelectedYear(item.value)}
          />
        </View>
      </View>

      <View>
        <Text style={styles.labelText}>Selection of rank: </Text>
        <Dropdown
          style={[styles.dropdown]}
          labelField="label"
          valueField="value"
          placeholder="Selection of rank"
          placeholderStyle={styles.placeholder}
          data={rank}
          value={selectedRank}
          onChange={(item) => setSelectedRank(item.value)}
        />
      </View>
      <View>
        <Text style={styles.labelText}>Roll no: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your roll no"
          value={rollNo}
          onChangeText={setRollNo}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 10,
  },
  dropdownRowContainer: {
    flex: 1,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  labelText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  placeholder: {
    color: "gray",
    fontStyle: "italic",
  },
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
