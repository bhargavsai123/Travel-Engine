import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  FlatList,
  Keyboard,
  Dimensions,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import firebase from "firebase";
import db from "../config";

const data = [
  {
    imageUrl: "",
    title: "Trip A",
  },
  {
    imageUrl: "",
    title: "Trip B",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Trip C",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Trip D",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Trip E",
  },
];

const sliderWidth = Dimensions.get("window").width;
const itemWidth = Math.round(sliderWidth * 0.7);
const itemHeight = Math.round((itemWidth * 3) / 4);

export default class Tripslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Icon
            name="ios-person-circle-outline"
            type="ionicon"
            color="#3399ff"
            size="35"
            style={{ alignSelf: "flex-end", marginRight: 25 }}
          />

          <Text style={styles.headText}>Trips</Text>
          <TextInput
            style={styles.input}
            placeholder="Search"
            textAlign={"center"}
          />
          <View style={{ height: 320, marginTop: 20 }}>
            <Text style={styles.mainText}>All Trips</Text>
            <FlatList
              horizontal
              data={this.state.data}
              renderItem={({ item: rowData }) => {
                return (
                  <Card containerStyle={styles.box}>
                    <Text style={{ marginBottom: 10 }}>{rowData.title}</Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
          <View style={{ height: 320 }}>
            <Text style={styles.mainText}>Trip Suggestions</Text>
            <FlatList
              horizontal
              data={this.state.data}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={styles.box}
                  >
                    <Text>{rowData.title}</Text>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0ffff",
  },
  headText: {
    fontSize: 24,
    margin: 25,
    marginBottom: 0,
    marginTop: 0,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  mainText: {
    fontSize: 18,
    margin: 25,
    marginBottom: 0,
    marginTop: 5,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  button: {
    width: "80%",
    elevation: 8,
    backgroundColor: "#e51d1c",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 15,
    shadowColor: "#c51415",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  input: {
    width: "90%",
    height: 40,
    fontSize: 20,
    borderRadius: 5,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#fffafa",
    color: "#999999",
    alignSelf: "center",
    shadowColor: "#b0c4de",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 8,
  },
  box: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 0.1,
    shadowColor: "#b0c4de",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 8,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
