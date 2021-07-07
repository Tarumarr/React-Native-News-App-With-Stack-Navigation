import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { styles } from "../style/styles";
import detail from "./detail";
import Swiper from "react-native-swiper";

class homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebc09923df8f44aa94337182618c6e28"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.articles }));
  }

  render() {
    return (
      <SafeAreaView style={styles.hsbody}>
        <ScrollView>
          <ScrollView
            pagingEnabled
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator
          >
            {this.state.data &&
              this.state.data.map((item, index) => {
                if (index > 2) return null;

                return (
                  <TouchableOpacity
                    style={styles.slide}
                    onPress={() =>
                      this.props.navigation.navigate("Detay", { item: item })
                    }
                  >
                    <ImageBackground
                      source={{ uri: item.urlToImage }}
                      style={styles.sw}
                    >
                      <View
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          justifyContent: "center",
                          alignItems: "center",
                          justifyContent:"flex-end",
                        }}
                      >
                        <Text style={styles.textbi}>{item.title}</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>

          <View style={{ marginTop: 15 }}>
            {this.state.data &&
              this.state.data.map((item, index) => {
                if (index < 3) return null;
                return (
                  <View key={index} style={{ padding: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Detay", { item: item })
                      }
                    >
                      <Image
                        style={{ height: 200, width: 390 }}
                        source={{ uri: item.urlToImage }}
                      />
                      <View>
                        <Text style={styles.text}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default homescreen;
